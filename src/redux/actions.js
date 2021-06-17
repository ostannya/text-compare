import {
  IS_IDENTICAL,
  IS_NOT_IDENTICAL
} from './constants.js'

export const identical = () => {
  return { type: IS_IDENTICAL }
}

export const notIdentical = () => {
  return { type: IS_NOT_IDENTICAL }
}
