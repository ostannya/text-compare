import {
  IS_IDENTICAL,
  IS_NOT_IDENTICAL
  // RESULT,
  // NO_RESULT
} from './constants.js'

const initialState = {
  identical: false
  // result: false
}

export function identicalReducer (state = initialState, action) {
  switch (action.type) {
    case IS_IDENTICAL:
      return !state.identical
    case IS_NOT_IDENTICAL:
      return state.identical
    default:
      return state.identical
  }
}

// export function resultReducer (state = initialState, action) {
//   switch (action.type) {
//     case RESULT:
//       return !state.result
//     case NO_RESULT:
//       return state.result
//     default:
//       return state.result
//   }
// }
