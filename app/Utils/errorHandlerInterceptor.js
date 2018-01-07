/*eslint-disable func-names, no-case-declarations*/
/**
 *  Error Handler Interceptor:
 *  ==========================
 *
 *  Shows a popup/etc when an API succeeds or fails.
 *
 *  Currently Supported Handler Component:
 *  1) Global Popup
 *  ... we can add more handler components later if required like `toasts messages`
 *
 *  Usage Details:
 *  =============
 *
 *  There are 2 types of handlers:
 *  1) ErrorHandlers which are defined in `errorHandlers`.
 *  2) SuccessHandlers which are defined in `successHandlers`.
 *
 *  We are using the following pattern to define error/success handlers.
 *
 * ```
 *  {
 *    httpCode1: handler1,
 *    httpCode2: handler2,
 *  }
 * ```
 *
 *  Where `Key` can be:
 *  1) HTTP status code(like `401`, `500`, `404`, etc): which will trigger
 *     the corresponding handler when the API returns this http status code.
 *  2) `default`: default handler (it is passed as a argument to the handler, if handler is a function)
 *  3) `other`: if a handler for some specific http code is not present then `other` handler would be used.
 *
 *  Where `Value` can be :
 *  1) A special string, eg: @popup|(popup-oops, popup-somethingWentWrong, popup-ok) (more on this later)
 *  2) function(response, defaultHandler): should return an object to handle it
 *     or return undefined/null to skip handling
 *  3) object of format:
 *
 * ```
 *   {
 *    handlerType: <type of handler component to use>,
 *    payload: <payload that has to be passed to that handler component>
 *   }
 * ```
 *
 *  FAQ:
 *
 *  How can I show a popup with 2 buttons on lets say 409?
 *  Answer:
 *  You can use `generatePopupConfiguration` to show a popup with custom configuration.
 *  In this case you will have to do this:
 *
 *  ```
 *  {
 *    409: function (response, defaultErrorCode) {
 *        return generatePopupConfiguration('popup-oops', response.message, {type:'OK'}, {type:'Cancel'});
 *      }
 *  }
 *  ```
 *
 */
import store from 'Store';
import {
  generatePopupConfiguration,
  HANDLER_TYPES,
} from 'Utils/APIErrorHandlerParser';

// Pop up need to be defined here
// import { showPopupAction } from 'Actions/popup';


const errorHandlers = {
  default: {
    handlerType: HANDLER_TYPES.POPUP,
    payload: generatePopupConfiguration(
      'popup-oops',
      'popup-somethingWentWrong',
    ),
  },
  400: function(response, defaultErrorHandler, shouldHandleErrors) {
    if (shouldHandleErrors) {      
      return defaultErrorHandler;
    }

    return null;
  },
  401: function(response, defaultErrorHandler, shouldHandleErrors) {
    if (shouldHandleErrors) {
      store.dispatch(logoutAction());
      return {
        handlerType: HANDLER_TYPES.POPUP,
        payload: generatePopupConfiguration(
          'popup-oops',
          'popup-sessionExpired',
          {
            name: 'btn-ok',
          },
        ),
      };
    }

    return null;
  },
  404: function(response, defaultErrorHandler, shouldHandleErrors) {
    if (shouldHandleErrors) {
      return defaultErrorHandler;
    }

    return null;
  },
  403: function(response, defaultErrorHandler, shouldHandleErrors) {
    if (shouldHandleErrors) {
      return defaultErrorHandler;
    }

    return null;
  },
  422: function() {
    store.dispatch(logoutAction());
    return {
      handlerType: HANDLER_TYPES.POPUP,
      payload: generatePopupConfiguration(
        'popup-oops',
        'popup-sessionExpired',
        {
          name: 'btn-ok',
        },
      ),
    };
  },
  429: function() {
    return {
      handlerType: HANDLER_TYPES.POPUP,
      payload: generatePopupConfiguration(
        'popup-oops',
        'popup-tooManyRequest',
        {
          name: 'btn-ok',
        },
      ),
    };
  },
  500: function(response, defaultErrorHandler, shouldHandleErrors) {
    if (shouldHandleErrors) {
      return defaultErrorHandler;
    }
    return null;
  },
  504: {
    handlerType: HANDLER_TYPES.POPUP,
    payload: generatePopupConfiguration('popup-oops', 'popup-timeout'),
  },
  // this currently will handle all our errors, we might want to do something selective.
  // need more info on what all http status code backend is sending.
  other: (response, defaultErrorCode) => defaultErrorCode,
  // handles 403, 404, + other explicitly unhandled HTTP codes
};

// ---- NOT CURRENTLY IN USE, CAN BE USED LATER IF REQUIRED -----
// there are some cases when the API is returning 200 but is also sending some error
// need more info on what all http status code backend is sending.
const successHandlers = {
  // for test
  /*
   default: '@popup | (popup-success, popup-success, popup-ok)',
   200: {
   handlerType: HANDLER_TYPES.POPUP,
   payload: generatePopupConfiguration('popup-success', 'popup-success')
   },
   */
  other: (response, defaultSuccessCode) => defaultSuccessCode,
};

const triggerHandler = (statusCode, body, handlersMap, shouldHandleErrors) => {
  let handler = handlersMap[statusCode] || handlersMap.other;
  let actionDetails;

  // if handler is a function get the resulting handler by executing it.
  if (typeof handler === 'function') {
    handler = handler(body, handlersMap.default, shouldHandleErrors);
  }

  // get handler type and handler payload
  switch (typeof handler) {
    case 'object':
      if (!(handler instanceof Promise)) {
        actionDetails = handler;
      }
      break;
    default:
      break;
  }

  // trigger handler
  if (actionDetails) {
    const handlerType = actionDetails.handlerType;
    const payload = actionDetails.payload;

    switch (handlerType) {
      case HANDLER_TYPES.POPUP:
        const popupConfig = payload;
        // store.dispatch action to launch the popup here.
        // store.dispatch(showPopupAction(popupConfig));
        break;
      default:
        actionDetails = null;
        throw new Error('Unknown handler type found');
    }
  }

  // else don't handle it.
  return !!actionDetails; // return status of err handling.
};

export const responseInterceptor = (res, config) => {
  // Throw error only is StatusCode is known
  if (res.status && res.headers) {
    let shouldHandlerErrors = config && config.shouldHandleErrors;
    shouldHandlerErrors = shouldHandlerErrors !== false;
    triggerHandler(
      res.status,
      res.statusText,
      successHandlers,
      shouldHandlerErrors,
    );
    return res; // unhandled and would be handled by component itself.
  }

  return res;
};

export const responseErrorInterceptor = (res, config) => {
  // Throw error only is StatusCode is known
  if (res.status && res.headers) {
    let shouldHandleErrors = true;
    if (config && config.hasOwnProperty('shouldHandleErrors')) {
      shouldHandleErrors = config && config.shouldHandleErrors;
    }
    triggerHandler(
      res.status,
      res.statusText || res.data.message,
      errorHandlers,
      shouldHandleErrors,
    );
  }

  return res;
};
