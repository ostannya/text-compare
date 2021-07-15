import { createStore, combineReducers } from 'redux'
import {
  identicalReducer,
  resultReducer,
  originalReducer,
  changedReducer,
  diffArrayReducer
} from './reducers.js'

const rootReducer = combineReducers({
  isIdentical: identicalReducer,
  hasResult: resultReducer,
  original: originalReducer,
  changed: changedReducer,
  diffArray: diffArrayReducer
})

const store = createStore(rootReducer)

export default store
