import { createStore, combineReducers } from 'redux'
import {
  identicalReducer
} from './reducers.js'

const rootReducer = combineReducers({
  identical: identicalReducer
})

const store = createStore(rootReducer)

export default store
