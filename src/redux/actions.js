import {
  IS_IDENTICAL,
  IS_NOT_IDENTICAL,
  RESULT,
  NO_RESULT
} from './constants.js'

export const identical = () => {
  return { type: IS_IDENTICAL }
}

export const notIdentical = () => {
  return { type: IS_NOT_IDENTICAL }
}

export const result = () => {
  return { type: RESULT }
}

export const noResult = () => {
  return { type: NO_RESULT }
}
