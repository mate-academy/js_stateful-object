'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    if (object.type === 'addProperties') {
      Object.assign(state, object.extraData);
    }

    if (object.type === 'removeProperties') {
      for (const element of object.keysToRemove) {
        delete state[element];
      }
    }

    if (object.type === 'clear') {
      for (const char in state) {
        delete state[char];
      }
    }
  }
}
module.exports = transformState;
