'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const keysToRemove of action.keysToRemove) {
          delete state[keysToRemove];
        }
        break;

      case 'clear':
        for (const keys in state) {
          delete state[keys];
        }
        break;

      default:
        throw new Error('Invalid action');
    }
  }

  return state;
}

// for (const part of actions) {
//   const { type } = part;
//   const { keysToRemove } = part;
//   const { extraData } = part;

//   switch (type) {
//     case 'addProperties':
//       Object.assign(state, extraData);
//       break;

//     case 'removeProperties':
//       delete state[keysToRemove];
//       break;

//     case 'clear':
//       for (const keys in state) {
//         delete state[keys];
//       }
//       break;

//     default:
//       throw new Error('Invalid action');
//   }
// }
// }

module.exports = transformState;
