import {
  IS_IDENTICAL,
  IS_NOT_IDENTICAL,
  RESULT,
  NO_RESULT,
  VALUE_ORIGINAL,
  VALUE_CHANGED,
  DIFF_ARRAY,
  SWAP
} from './constants.js'
import * as Diff from 'diff'
import store from '../redux/store.js'

export function identical () {
  return { type: IS_IDENTICAL }
}

export function notIdentical () {
  return { type: IS_NOT_IDENTICAL }
}

export function result () {
  return { type: RESULT }
}

export function noResult () {
  return { type: NO_RESULT }
}

export function valueChangeOriginal (value) {
  return {
    type: VALUE_ORIGINAL,
    value
  }
}

export function valueChangeChanged (value) {
  return {
    type: VALUE_CHANGED,
    value
  }
}

export function manageCompare (original, changed) {
  const diffArray = Diff.diffChars(original, changed)
  return {
    type: DIFF_ARRAY,
    diffArray
  }
}

export function manageSwap (original, changed) {
  store.dispatch(valueChangeOriginal(changed))
  store.dispatch(valueChangeChanged(original))
  return {
    type: SWAP
  }
}
