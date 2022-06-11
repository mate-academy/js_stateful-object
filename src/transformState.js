'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const char of actions) {
    for (const key in char) {
      if (key === 'extraData') {
        for (const tey in char[key]) {
          state[tey] = char[key][tey];
        }
      }

      if (key === 'keysToRemove') {
        for (const remov of char[key]) {
          delete state[remov];
        }
      }

      if (char[key] === 'clear') {
        for (const allKey in state) {
          delete state[allKey];
        }
      }
    }
  }
}

module.exports = transformState;
