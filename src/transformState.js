'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    switch (key.type) {
      case 'addProperties':
        for (const newKey in key.extraData) {
          state[newKey] = key.extraData[newKey];
        }
        break;
      case 'removeProperties':
        for (const newKey of key.keysToRemove) {
          delete state[newKey];
        }
        break;
      case 'clear':
        for (const newKey in state) {
          delete state[newKey];
        }
        break;
    }
  }
}

module.exports = transformState;
