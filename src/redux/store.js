import { createStore, combineReducers } from 'redux'
import {
  identicalReducer,
  resultReducer,
  swapReducer,
  originalReducer,
  changedReducer
} from './reducers.js'

const rootReducer = combineReducers({
  isIdentical: identicalReducer,
  hasResult: resultReducer,
  isSwapped: swapReducer,
  original: originalReducer,
  changed: changedReducer
})

const store = createStore(rootReducer)

export default store
