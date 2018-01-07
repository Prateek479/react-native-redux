import { combineReducers } from 'redux-immutable';


const baseReducer = (state = {}) => state;
/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    baseReducer,
    ...asyncReducers,
  });
}
