'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case action.type === 'addProperties'
        :
        for (const prop in action.extraData) {
          state[prop] = action.extraData[prop];
        }
        break;

      case action.type === 'removeProperties'
        :
        for (const keys of action.keysToRemove) {
          delete state[keys];
        }
        break;

      case action.type === 'clear'
        :
        for (const states in state) {
          delete state[states];
        }
        break;
    }
  }
}
//   for (const action of actions) {
//     if (action.type === 'addProperties') {
//       for (const prop in action.extraData) {
//         state[prop] = action.extraData[prop];
//       }
//     }

//     if (action.type === 'removeProperties') {
//       for (const keys of action.keysToRemove) {
//         delete state[keys];
//       }
//     }

//     if (action.type === 'clear') {
//       for (const states in state) {
//         delete state[states];
//       }
//     }
//   }
// }

module.exports = transformState;
