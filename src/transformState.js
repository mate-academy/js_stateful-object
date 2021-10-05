'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    for (const key in obj) {
      if (key === 'extraData') {
        for (const keyIn in obj[key]) {
          state[keyIn] = obj[key][keyIn];
        }
      }

      if (key === 'keysToRemove') {
        for (const keyIn of obj[key]) {
          delete state[keyIn];
        }
      }

      if (key === 'type' && obj[key] === 'clear') {
        for (const keyIn in state) {
          delete state[keyIn];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
