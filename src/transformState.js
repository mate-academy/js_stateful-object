'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    if (key.type === 'addProperties') {
      Object.assign(state, key.extraData);
    }

    if (key.type === 'removeProperties') {
      for (const char of key.keysToRemove) {
        delete state[char];
      }
    }

    if (key.type === 'clear') {
      for (const char in state) {
        delete state[char];
      }
    }
  }
}

module.exports = transformState;
