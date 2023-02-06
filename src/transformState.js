'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const char of actions) {
    if (char.type === 'addProperties') {
      Object.assign(state, char.extraData);
    }

    if (char.type === 'removeProperties') {
      for (const charRemove of char.keysToRemove) {
        for (const key in state) {
          if (charRemove === key) {
            delete state[key];
          }
        }
      }
    }

    if (char.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
