'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const key of actions) {
    for (const char in key) {
      if (key[char] === 'addProperties') {
        for (const a in key.extraData) {
          state[a] = key.extraData[a];
        }
      }

      if (key[char] === 'removeProperties') {
        for (const a in state) {
          if (key.keysToRemove.includes(a)) {
            delete state[a];
          }
        }
      }

      if (key[char] === 'clear') {
        for (const clear in state) {
          delete state[clear];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
