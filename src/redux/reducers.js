import {
  IS_IDENTICAL,
  IS_NOT_IDENTICAL
} from './constants.js'

const INITIAL_STATE = {
  identical: false
}

export function identicalReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case IS_IDENTICAL:
      return { ...state, identical: true }
    case IS_NOT_IDENTICAL:
      return { ...state, identical: false }
    default:
      return state
  }
}
