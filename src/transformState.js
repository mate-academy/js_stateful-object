'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const char of actions) {
    if (char['type'] === 'addProperties') {
      for (const keys in char['extraData']) {
        state[keys] = char['extraData'][keys];
      }
    }

    if (char['type'] === 'removeProperties') {
      for (const keys of char['keysToRemove']) {
        delete state[keys];
      }
    }

    if (char['type'] === 'clear') {
      for (const keys in state) {
        delete state[keys];
      }
    }
  }
}

module.exports = transformState;
