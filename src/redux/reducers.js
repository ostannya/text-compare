import {
  IS_IDENTICAL,
  IS_NOT_IDENTICAL,
  RESULT,
  NO_RESULT,
  SWAPPED,
  NOT_SWAPPED,
  VALUE_ORIGINAL,
  VALUE_CHANGED
} from './constants.js'

const INITIAL_STATE_IDENTICAL = false
export function identicalReducer (state = INITIAL_STATE_IDENTICAL, action) {
  switch (action.type) {
    case IS_IDENTICAL:
      return true
    case IS_NOT_IDENTICAL:
      return false
    default:
      return state
  }
}

const INITIAL_STATE_RESULT = false
export function resultReducer (state = INITIAL_STATE_RESULT, action) {
  switch (action.type) {
    case RESULT:
      return true
    case NO_RESULT:
      return false
    default:
      return state
  }
}

const INITIAL_STATE_SWAPPED = false
export function swapReducer (state = INITIAL_STATE_SWAPPED, action) {
  switch (action.type) {
    case SWAPPED:
      return true
    case NOT_SWAPPED:
      return false
    default:
      return state
  }
}

const INITIAL_STATE_ORIGINAL = ''
export function originalReducer (state = INITIAL_STATE_ORIGINAL, action) {
  switch (action.type) {
    case VALUE_ORIGINAL: {
      return action.value
    }
    default:
      return state
  }
}

const INITIAL_STATE_CHANGED = ''
export function changedReducer (state = INITIAL_STATE_CHANGED, action) {
  switch (action.type) {
    case VALUE_CHANGED: {
      return action.value
    }
    default:
      return state
  }
}
