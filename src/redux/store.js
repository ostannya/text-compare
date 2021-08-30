import { createStore, combineReducers, applyMiddleware } from 'redux'
import {
  markAsIdentical,
  showResult,
  original,
  changed,
  diffArray
} from './reducers.js'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  markAsIdentical,
  showResult,
  original,
  changed,
  diffArray
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
