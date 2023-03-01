'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const key of actions) {
    switch (key.type) {
      case 'addProperties':
        Object.assign(state, key.extraData);
        break;

      case 'clear':
        for (const prop of Object.getOwnPropertyNames(state)) {
          delete state[prop];
        }
        break;

      case 'removeProperties':
        for (const val of key.keysToRemove) {
          delete state[val];
        }
    }
  }
}

module.exports = transformState;
