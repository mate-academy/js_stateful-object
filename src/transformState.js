'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const key of actions) {
    if (key.type === 'addProperties') {
      Object.assign(state, key.extraData);
    } else if (key.type === 'clear') {
      for (const prop of Object.getOwnPropertyNames(state)) {
        delete state[prop];
      }
    } else if (key.type === 'removeProperties') {
      for (const val of key.keysToRemove) {
        delete state[val];
      }
    }
  }
}

module.exports = transformState;
