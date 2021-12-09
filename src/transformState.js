'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let newState = state;

  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        newState = Object.assign(state, actions[i].extraData);
        break;
      case 'removeProperties':
        for (let j = 0; j < actions[i].keysToRemove.length; j++) {
          delete state[actions[i].keysToRemove[j]];
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      default:
        return newState;
    }
  }

  return newState;
}

//   for (let i = 0; i < actions.length; i++) {
//     if (actions[i].type === 'addProperties') {
//       newState = Object.assign(state, actions[i].extraData);
//     }

//     if (actions[i].type === 'removeProperties') {
//       for (const j in state) {
//         for (let k = 0; k < actions[i].keysToRemove.length; k++) {
//           if (actions[i].keysToRemove[k] === j) {
//             delete state[j];
//           }
//         }
//       }
//     }

//     if (actions[i].type === 'clear') {
//       for (const j in state) {
//         delete state[j];
//       }
//     }
//   }

//   return newState;
// }

module.exports = transformState;
