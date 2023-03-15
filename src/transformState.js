'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const key in action.keysToRemove) {
          delete state[action.keysToRemove[key]];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

// loops === EVIL
// function transformState(state, actions) {
//   for (const action of actions) {
//     if (action.type === 'addProperties') {
//       Object.assign(state, action.extraData);
//     } else if (action.type === 'removeProperties') {
//       for (const key in action.keysToRemove) {
//         delete state[action.keysToRemove[key]];
//       }
//     } else if (action.type === 'clear') {
//       for (const key in state) {
//         delete state[key];
//       }
//     }
//   }

//   return state;
// }

module.exports = transformState;
