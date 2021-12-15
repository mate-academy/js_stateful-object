'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    switch (key.type) {
      case 'addProperties':
        Object.assign(state, key.extraData);
        break;

      case 'removeProperties':
        for (const char of key.keysToRemove) {
          delete state[char];
        }
        break;

      case 'clear':
        for (const char in state) {
          delete state[char];
        }
        break;
    }
  }
}

module.exports = transformState;
