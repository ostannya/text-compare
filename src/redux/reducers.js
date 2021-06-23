import {
  IS_IDENTICAL,
  IS_NOT_IDENTICAL,
  RESULT,
  NO_RESULT
} from './constants.js'

const INITIAL_STATE = {
  identical: false,
  result: false
}

export function identicalReducer (state = INITIAL_STATE.identical, action) {
  switch (action.type) {
    case IS_IDENTICAL:
      return { ...state, identical: true }
    case IS_NOT_IDENTICAL:
      return { ...state, identical: false }
    default:
      return state
  }
}

// is there a better way to do it? with if else? but then if what?
export function resultReducer (state = INITIAL_STATE.result, action) {
  switch (action.type) {
    case RESULT:
      return { ...state, result: true }
    case NO_RESULT:
      return { ...state, result: false }
    default:
      return state
  }
}
