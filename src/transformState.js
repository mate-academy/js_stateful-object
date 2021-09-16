'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const key of actions) {
    switch (key.type) {
      case 'addProperties':
        Object.assign(state, key.extraData);
        break;
      case 'clear':
        for (const stateKey in state) {
          delete state[stateKey];
        }
        break;
      case 'removeProperties':
        for (const removeKey of key.keysToRemove) {
          delete state[removeKey];
        }
        break;
      default: return null;
    }
  }

  return state;
}

module.exports = transformState;
