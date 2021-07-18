import {
  IS_IDENTICAL,
  IS_NOT_IDENTICAL,
  RESULT,
  NO_RESULT,
  VALUE_CHANGE,
  DIFF_ARRAY
} from './constants.js'

export function identical (state = false, action) {
  switch (action.type) {
    case IS_IDENTICAL:
      return true
    case IS_NOT_IDENTICAL:
      return false
    default:
      return state
  }
}

export function result (state = false, action) {
  switch (action.type) {
    case RESULT:
      return true
    case NO_RESULT:
      return false
    default:
      return state
  }
}

export function original (state = '', action) {
  switch (action.type) {
    case VALUE_CHANGE: {
      return action.original
    }
    default:
      return state
  }
}

export function changed (state = '', action) {
  switch (action.type) {
    case VALUE_CHANGE: {
      return action.changed
    }
    default:
      return state
  }
}

export function diffArray (state = [], action) {
  switch (action.type) {
    case DIFF_ARRAY: {
      return action.diffArray
    }
    default:
      return state
  }
}
