import { combineReducers } from 'redux'
import profile from './profile'
import counter from './counter'

export default combineReducers({
  profile,
  counter
})