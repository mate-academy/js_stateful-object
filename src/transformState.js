'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    if (key.type === 'addProperties') {
      Object.assign(state, key.extraData);
    }

    if (key.type === 'removeProperties') {
      for (const value of key.keysToRemove) {
        delete state[value];
      }
    }

    if (key.type === 'clear') {
      for (const removeKey in state) {
        delete state[removeKey];
      }
    }
  }

  return state;
}

module.exports = transformState;
