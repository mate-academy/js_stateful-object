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
      for (const chars of char.keysToRemove) {
        delete state[chars];
      }
    }

    if (char.type === 'clear') {
      for (const keys in state) {
        delete state[keys];
      }
    }
  }

  return state;
}

module.exports = transformState;
