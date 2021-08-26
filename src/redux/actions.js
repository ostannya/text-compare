import {
  NOT_IDENTICAL,
  RESULT,
  NO_RESULT,
  COMPARE,
  VALUE_CHANGE,
  DIFF_COMPARE,
  SWAP,
  CLEAR,
  LOWERCASE,
  BREAKS_TO_SPACES,
  REMOVE_WHITESPACES
} from './constants.js'
import * as Diff from 'diff'

// after clear I have to explicitly set identical to false
function notIdentical () {
  return { type: NOT_IDENTICAL }
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
    type: DIFF_COMPARE,
    diffArray
  }
}

export function compare (original, changed) {
  return (dispatch) => {
    if (original !== changed) {
      dispatch(diffCompare(original, changed))
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
    dispatch({ type: REMOVE_WHITESPACES })
  }
}
