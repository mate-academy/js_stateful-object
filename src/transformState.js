'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const index of actions) {
    switch (index.type) {
      case 'addProperties':
        Object.assign(state, index.extraData);
        break;

      case 'removeProperties':
        for (const char of index.keysToRemove) {
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

  return state;
}

module.exports = transformState;
