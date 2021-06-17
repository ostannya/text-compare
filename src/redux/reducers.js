import {
  IS_IDENTICAL,
  IS_NOT_IDENTICAL
} from './constants.js'

const initialState = {
  identical: false
}

export function identicalReducer (state = initialState, action) {
  switch (action.type) {
    case IS_IDENTICAL:
      return !state.identical
    case IS_NOT_IDENTICAL:
      return state.identical
    default:
      return state.identical
  }
}
