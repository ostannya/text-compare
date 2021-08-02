import {
  IS_IDENTICAL,
  IS_NOT_IDENTICAL,
  RESULT,
  NO_RESULT,
  COMPARE,
  VALUE_CHANGE,
  DIFF_ARRAY,
  SWAP,
  CLEAR,
  LOWERCASE,
  BREAKS_TO_SPACES,
  REMOVE_WHITESPACES
} from './constants.js'
import * as Diff from 'diff'

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

export function valueChange (original, changed) {
  return {
    type: VALUE_CHANGE,
    original,
    changed
  }
}

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

export function swap () {
  return (dispatch, getState) => {
    const { original, changed } = getState()
    dispatch(valueChange(changed, original))
    dispatch(compare(changed, original))
    dispatch({ type: SWAP })
  }
}

export function clear () {
  return (dispatch) => {
    dispatch(valueChange('', ''))
    dispatch(notIdentical())
    dispatch(noResult())
    dispatch({ type: CLEAR })
  }
}

export function lowercase () {
  return (dispatch, getState) => {
    const { original, changed } = getState()
    dispatch(valueChange(original.toLocaleLowerCase(), changed.toLocaleLowerCase()))
    dispatch(notIdentical())
    dispatch({ type: LOWERCASE })
  }
}

function replaceBreaks (text) {
  const result = text.replace(/\n/g, ' ')
  return result
}

export function breaksToSpaces () {
  return (dispatch, getState) => {
    const { original, changed } = getState()
    dispatch(valueChange(replaceBreaks(original), replaceBreaks(changed)))
    dispatch(notIdentical())
    dispatch({ type: BREAKS_TO_SPACES })
  }
}

function removeSpaces (text) {
  const result = text.replace(/\s{2,}/g, ' ').trim()
  return result
}

export function removeWhiteSpaces () {
  return (dispatch, getState) => {
    const { original, changed } = getState()
    dispatch(valueChange(removeSpaces(original), removeSpaces(changed)))
    dispatch(notIdentical())
    dispatch({ type: REMOVE_WHITESPACES })
  }
}
