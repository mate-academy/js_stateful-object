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
        for (const key of action.keysToRemove) {
          if (key in state) {
            delete state[key];
          }
        }

        break;

      case 'clear':
        for (const key of Object.keys(state)) {
          delete state[key];
        }

        break;

      default:
        break;
    }
  }
}

// function transformState(state, actions) {
//   for (let i = 0; i < actions.length; i++) {
//     if (actions[i]['extraData']) {
//       for (const keys in actions[i]['extraData']) {
//         state[keys] = actions[i]['extraData'][keys];
//       }
//     } else if (actions[i]['keysToRemove']) {
//       for (const values of actions[i]['keysToRemove']) {
//         delete state[values];
//       }
//     } else if (actions[i]['type'] === 'clear') {
//       for (const deleted in state) {
//         delete state[deleted];
//       }
//     }
//   }
// }

module.exports = transformState;
