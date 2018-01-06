/**
 * Create the store with asynchronously loaded reducers
 */
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from 'Reducer'

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  // Create the store with the middlewares
  // 1. sagaMiddleware: Makes redux-sagas work

  const middlewares = [sagaMiddleware];

  const store = createStore(
    reducer,
    applyMiddleware(...middlewares),
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {}; // Async reducer registry

  return store;
}
