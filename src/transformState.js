'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const key of actions) {
    if (key.type === 'addProperties') {
      Object.assign(state, key.extraData);
    }

    if (key.type === 'clear') {
      for (const stateKey in state) {
        delete state[stateKey];
      }
    }

    if (key.type === 'removeProperties') {
      for (const removeKey of key.keysToRemove) {
        delete state[removeKey];
      }
    }
  }

  return state;
}

module.exports = transformState;
