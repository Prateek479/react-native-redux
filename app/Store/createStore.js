/**
 * Create the store with asynchronously loaded reducers
 */
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fromJS } from 'immutable';
import createReducer from 'Reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();


export default function configureStore(initialState = {}) {
  // Create the store with the middlewares
  // 1. sagaMiddleware: Makes redux-sagas work

  const middlewares = [sagaMiddleware];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeWithDevTools(applyMiddleware(...middlewares)),

  );


  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {}; // Async reducer registry

  return store;
}
