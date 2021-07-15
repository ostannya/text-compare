import {
  IS_IDENTICAL,
  IS_NOT_IDENTICAL,
  RESULT,
  NO_RESULT,
  VALUE_ORIGINAL,
  VALUE_CHANGED,
  DIFF_ARRAY
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

const INITIAL_STATE_DIFF_ARRAY = []
export function diffArrayReducer (state = INITIAL_STATE_DIFF_ARRAY, action) {
  switch (action.type) {
    case DIFF_ARRAY: {
      return action.diffArray
    }
    default:
      return state
  }
}
