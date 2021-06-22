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
      for (const key of char.keysToRemove) {
        delete state[key];
      }
    }

    if (char.type === 'clear') {
      for (const key of Object.keys(state)) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
