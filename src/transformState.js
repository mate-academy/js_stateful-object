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
      for (const removeKey of key.keysToRemove) {
        delete state[removeKey];
      }
    }

    if (key.type === 'clear') {
      for (const deleteKey in state) {
        delete state[deleteKey];
      }
    }
  }

  return state;
}

module.exports = transformState;
