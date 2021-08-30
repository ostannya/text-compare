import {
  VALUE_CHANGE,
  CLEAR,
  COMPARE
} from './constants.js'

export function markAsIdentical (state = false, action) {
  switch (action.type) {
    case VALUE_CHANGE:
      return action.original === action.changed
    case CLEAR:
      return false
    default:
      return state
  }
}

export function showResult (state = false, action) {
  switch (action.type) {
    case CLEAR:
      return false
    case COMPARE:
      return true
    default:
      return state
  }
}

export function original (state = '', action) {
  switch (action.type) {
    case VALUE_CHANGE:
      return action.original
    case CLEAR:
      return ''
    default:
      return state
  }
}

export function changed (state = '', action) {
  switch (action.type) {
    case VALUE_CHANGE:
      return action.changed
    case CLEAR:
      return ''
    default:
      return state
  }
}

export function diffArray (state = [], action) {
  switch (action.type) {
    case COMPARE:
      return action.diffArray
    default:
      return state
  }
}
