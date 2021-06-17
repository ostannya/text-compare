import { createStore, combineReducers } from 'redux'
import {
  identicalReducer
} from './reducers.js'

const rootReducer = combineReducers({
  isIdentical: identicalReducer
})

const store = createStore(rootReducer)

export default store
