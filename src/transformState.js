'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

// function transformState1(state, actions) {
//   for (const action of actions) {
//     if (action.type === 'addProperties') {
//       Object.assign(state, action.extraData);
//     } else if (action.type === 'removeProperties') {
//       for (const key of action.keysToRemove) {
//         delete state[key];
//       }
//     } else if (action.type === 'clear') {
//       for (const prop in state) {
//         delete state[prop];
//       }
//     }
//   }
// }

function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case (action.type === 'addProperties'):
        Object.assign(state, action.extraData);
        break;
      case (action.type === 'removeProperties'):
        for (const key of action.keysToRemove) {
          delete state[key];
        };
        break;
      case (action.type === 'clear'):
        for (const prop in state) {
          delete state[prop];
        };
        break;
    }
  }
}

module.exports = transformState;
