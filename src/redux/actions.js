import {
  IS_IDENTICAL,
  IS_NOT_IDENTICAL,
  RESULT,
  NO_RESULT,
  COMPARE,
  VALUE_ORIGINAL,
  VALUE_CHANGED,
  // VALUE_CHANGE,
  DIFF_ARRAY,
  SWAP,
  CLEAR,
  CHANGE,
  LOWERCASE,
  BREAKS_TO_SPACES,
  REMOVE_WHITESPACES
} from './constants.js'
import * as Diff from 'diff'
import store from '../redux/store.js'

function identical () {
  return { type: IS_IDENTICAL }
}

export function notIdentical () {
  return { type: IS_NOT_IDENTICAL }
}

function result () {
  return { type: RESULT }
}

function noResult () {
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

// export function valueChange (original, changed) {
//   return {
//     type: VALUE_CHANGE,
//     original,
//     changed
//   }
// }

function diffCompare (original, changed) {
  const diffArray = Diff.diffChars(original, changed)
  return {
    type: DIFF_ARRAY,
    diffArray
  }
}

export function compare (original, changed) {
  return (dispatch) => {
    if (original === changed) {
      dispatch(identical())
      dispatch(noResult())
      dispatch({ type: COMPARE })
    } else {
      dispatch(diffCompare(original, changed))
      dispatch(notIdentical())
      dispatch(result())
      dispatch({ type: COMPARE })
    }
  }
}

export function swap (original, changed) {
  store.dispatch(valueChangeOriginal(changed))
  store.dispatch(valueChangeChanged(original))
  return {
    type: SWAP
  }
}

export function clear () {
  return (dispatch) => {
    dispatch(valueChangeOriginal(''))
    dispatch(valueChangeChanged(''))
    dispatch(notIdentical())
    dispatch(noResult())
    dispatch({ type: CLEAR })
  }
}

export function change (original, changed) {
  return (dispatch) => {
    dispatch(valueChangeOriginal(original))
    dispatch(valueChangeChanged(changed))
    dispatch({ type: CHANGE })
  }
}

export function lowercase (original, changed) {
  return (dispatch) => {
    dispatch(valueChangeOriginal(original.toLocaleLowerCase()))
    dispatch(valueChangeChanged(changed.toLocaleLowerCase()))
    dispatch(notIdentical())
    dispatch({ type: LOWERCASE })
  }
}

function replaceBreaks (text) {
  const result = text.replace(/\n/g, ' ')
  return result
}

export function breaksToSpaces (original, changed) {
  return (dispatch) => {
    dispatch(valueChangeOriginal(replaceBreaks(original)))
    dispatch(valueChangeChanged(replaceBreaks(changed)))
    dispatch(notIdentical())
    dispatch({ type: BREAKS_TO_SPACES })
  }
}

function removeSpaces (text) {
  const result = text.replace(/\s{2,}/g, ' ').trim()
  return result
}

export function removeWhiteSpaces (original, changed) {
  return (dispatch) => {
    dispatch(valueChangeOriginal(removeSpaces(original)))
    dispatch(valueChangeChanged(removeSpaces(changed)))
    dispatch(notIdentical())
    dispatch({ type: REMOVE_WHITESPACES })
  }
}
