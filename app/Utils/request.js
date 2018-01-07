/*eslint-disable max-params*/
import axios from 'axios';
import { extend, isEmpty, isUndefined, startsWith, toNumber } from 'lodash';
import moment from 'moment';
import config from 'Config';
import {
  responseErrorInterceptor,
  responseInterceptor,
} from 'Utils/errorHandlerInterceptor';
// import { getDataFromAsyncStore } from './helper/asyncstorageHelper';
// import {
//   queryParams,
// } from 'Utils/apicallHelper';

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */

 function checkStatus(response, otherConfig) {
  if (response.headers && response.headers.authorization) {
    const token = extractToken(response.headers.authorization);
    return setPromotedTokenInKeyChain(token).then(() =>
      responseInterceptor(response, otherConfig),
    );
  }
  return responseInterceptor(response, otherConfig);
}

function queryParams(params) {
    return Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
}

function handleError(error, otherConfig) {
  // The connection errors aren't handled by axios
  // so handling it this way.

  if (isUndefined(error.response)) {
    const err = new Error('Connection Error');
    const errorObj = { err };
    errorObj.statusCode = 522;
    errorObj.message = 'connection-error';
    throw errorObj;
  }
  const errorObj = new Error(error.response && error.response.statusText);
  errorObj.response = responseErrorInterceptor(error.response, otherConfig);
  throw errorObj;
}

/**
 * make an http call using axios module with original config
 * otherConfig used to pass configs like errorHandling etc
 */
function makeAPICall(originalConfig, otherConfig) {
  return axios(originalConfig)
    .then(response => checkStatus(response, otherConfig))
    .then(nextResponse => {
      if (nextResponse.data) {
        return nextResponse.data;
      }
      return nextResponse;
    })
    .catch(response => handleError(response, otherConfig));
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * e.g. oof options {object}
 {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
 }
 *
 * @return {object}           The response data
 */




export default function callApi(url, options = {}, idToken) {
    const defaultHeaders = {
        Accept: 'application/json',
    };

    const query = options.query || {};
    const method = options.method || 'get';
    const data = options.data || null;
    const headers = extend({ ...options.headers, ...defaultHeaders });
    const removeAuthorizationHeader = options.removeAuthorizationHeader || false;
    const timeout = options.timeout || null;
    const otherConfig = options.otherConfig || {};

    const originalConfig = {
        headers,
        method,
        query,
        url,
    };

    if (data) {
      originalConfig.data = data;
    }

    if (timeout) {
        // axios expects timeout to be a no.
        originalConfig.timeout = toNumber(timeout);
    }

    if (!isEmpty(originalConfig.query)) {
        let urlWithQueryParams = url;
        urlWithQueryParams +=
            (urlWithQueryParams.indexOf('?') === -1 ? '?' : '&') +
            queryParams(originalConfig.query);
        delete originalConfig.query;
        originalConfig.url = urlWithQueryParams;
    }

    return makeAPICall(originalConfig, otherConfig);
}
