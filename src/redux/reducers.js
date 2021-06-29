import {
  IS_IDENTICAL,
  IS_NOT_IDENTICAL,
  RESULT,
  NO_RESULT,
  SWAPPED,
  NOT_SWAPPED,
  DIFF_ARRAY
} from './constants.js'
import * as Diff from 'diff'

const INITIAL_STATE = {
  identical: false,
  result: false,
  swapped: false,
  diffArray: [],
  original: '',
  changed: ''
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

export function swapReducer (state = INITIAL_STATE.swapped, action) {
  switch (action.type) {
    case SWAPPED:
      return { ...state, swapped: true }
    case NOT_SWAPPED:
      return { ...state, swapped: false }
    default:
      return state
  }
}

export function diffArrayReducer (state = INITIAL_STATE.diffArray, action) {
  switch (action.type) {
    case DIFF_ARRAY: {
      const original = INITIAL_STATE.original
      const changed = INITIAL_STATE.changed
      const differenceArray = Diff.diffChars(original, changed)
      return { ...state, diffArray: differenceArray }
    }
    default:
      return state
  }
}
