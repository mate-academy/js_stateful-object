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
      for (const i of key.keysToRemove) {
        delete state[i];
      }
    }

    if (key.type === 'clear') {
      for (const i in state) {
        delete state[i];
      }
    }
  }

  return state;
}

module.exports = transformState;
