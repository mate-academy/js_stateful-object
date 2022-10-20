'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        Object.assign(state, obj.extraData);

        break;

      case 'removeProperties':
        for (const key of obj.keysToRemove) {
          delete state[key];
        }

        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
    }
  }
}

module.exports = transformState;

// if (obj.type === 'addProperties') {
//   Object.assign(state, obj.extraData);
// }

// if (obj.type === 'removeProperties') {
//   for (const key of obj.keysToRemove) {
//     delete state[key];
//   }
// }

// if (obj.type === 'clear') {
//   for (const key in state) {
//     delete state[key];
//   }
// }
