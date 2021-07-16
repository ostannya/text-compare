import { createStore, combineReducers, applyMiddleware } from 'redux'
import {
  identical,
  result,
  original,
  changed,
  diffArray
} from './reducers.js'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  identical,
  result,
  original,
  changed,
  diffArray
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
