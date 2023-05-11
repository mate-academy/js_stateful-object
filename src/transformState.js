'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
// function transformState(state, actions) {
//   const newState = state;

//   for (const action of actions) {
//     const { type, keysToRemove, extraData } = action;

//     switch (type) {
//       case 'addProperties':
//         Object.assign(newState, extraData);
//         break;

//       case 'removeProperties':
//         for (const keyToRemove of keysToRemove) {
//           delete newState[keyToRemove];
//         }
//         break;

//       case 'clear':
//         for (const keyToRemoveInState of state) {
//           delete state[keyToRemoveInState];
//         }
//         break;

//       default:
//         return `Unknown type ${type} `;
//     }
//   }

//   return newState;
// }

function transformState(state, actions) {
  for (const action of actions) {
    const { type, keysToRemove, extraData } = action;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        for (const keyToRemove of keysToRemove) {
          delete state[keyToRemove];
        }
        break;

      case 'clear':
        for (const keyToRemoveInState in state) {
          delete state[keyToRemoveInState];
        }
        break;

      default:
        return `Unknown type ${type} `;
    }
  }

  return state;
}

module.exports = transformState;
