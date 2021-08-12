'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    for (const val in key) {
      if (key[val] === 'clear') {
        for (const keys in state) {
          delete state[keys];
        }
      }

      if (val === 'keysToRemove') {
        for (const i of key[val]) {
          if (state.hasOwnProperty([i])) {
            delete state[i];
          }
        }
      }

      if (val === 'extraData') {
        Object.assign(state, key[val]);
      }
    }
  }
}

module.exports = transformState;
