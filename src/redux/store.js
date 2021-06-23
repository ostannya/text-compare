import { createStore, combineReducers } from 'redux'
import {
  identicalReducer,
  resultReducer
} from './reducers.js'

const rootReducer = combineReducers({
  isIdentical: identicalReducer,
  hasResult: resultReducer
})

const store = createStore(rootReducer)

export default store
