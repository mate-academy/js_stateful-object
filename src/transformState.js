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
      case 'removeProperties':
        for (const delKey of key.keysToRemove) {
          delete state[delKey];
        }
        break;
      case 'clear':
        for (const item in state) {
          delete state[item];
        }
        break;
    }
  }
}

module.exports = transformState;
