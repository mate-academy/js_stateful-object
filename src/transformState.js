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
      for (const el of key.keysToRemove) {
        delete state[el];
      }
    }

    if (key.type === 'clear') {
      for (const element in state) {
        delete state[element];
      }
    }
  }
}

module.exports = transformState;
