import {
  COMPARE,
  VALUE_CHANGE,
  SWAP,
  CLEAR,
  LOWERCASE,
  BREAKS_TO_SPACES,
  REMOVE_WHITESPACES
} from './constants.js'
import * as Diff from 'diff'

export function valueChange (original, changed) {
  return {
    type: VALUE_CHANGE,
    original,
    changed
  }
}

export function compare () {
  return (dispatch, getState) => {
    const { original, changed } = getState()
    const diffArray = Diff.diffChars(original, changed)
    if (original !== changed) {
      dispatch({ type: COMPARE, diffArray })
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
    dispatch({ type: CLEAR })
  }
}

export function lowercase () {
  return (dispatch, getState) => {
    const { original, changed } = getState()
    dispatch(valueChange(original.toLocaleLowerCase(), changed.toLocaleLowerCase()))
    dispatch(compare(original.toLocaleLowerCase(), changed.toLocaleLowerCase()))
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
    dispatch(compare(replaceBreaks(original), replaceBreaks(changed)))
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
    dispatch(compare(removeSpaces(original), removeSpaces(changed)))
    dispatch({ type: REMOVE_WHITESPACES })
  }
}
