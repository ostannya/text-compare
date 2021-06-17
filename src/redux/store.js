import { createStore, combineReducers } from 'redux'
import {
  identicalReducer
//   resultReducer
} from './reducers.js'

const rootReducer = combineReducers({
  identical: identicalReducer
//   result: resultReducer
})

const store = createStore(rootReducer)

export default store
