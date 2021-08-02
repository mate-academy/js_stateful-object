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
      for (const prop of char.keysToRemove) {
        delete state[prop];
      }
    }

    if (char.type === 'clear') {
      for (const value in state) {
        delete state[value];
      }
    }
  }

  return state;
}

module.exports = transformState;
