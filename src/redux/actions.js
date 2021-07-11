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

export function swapped () {
  return { type: SWAPPED }
}

export function notSwapped () {
  return { type: NOT_SWAPPED }
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
