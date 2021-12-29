'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;
      case 'removeProperties':
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
// if (type === 'addProperties') {
//   Object.assign(state, extraData);
// }

// if (type === 'removeProperties') {
//   for (const key of keysToRemove) {
//     delete state[key];
//   }
// }

// if (type === 'clear') {
//   for (const key in state) {
//     delete state[key];
//   }
// }
//
