import { createStore, combineReducers } from 'redux'
import {
  identicalReducer,
  resultReducer,
  swapReducer,
  diffArrayReducer
} from './reducers.js'

const rootReducer = combineReducers({
  isIdentical: identicalReducer,
  hasResult: resultReducer,
  isSwapped: swapReducer,
  isDiffArray: diffArrayReducer
})

const store = createStore(rootReducer)

export default store
