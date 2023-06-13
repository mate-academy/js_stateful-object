'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const value of actions) {
    switch (value.type) {
      case 'addProperties':
        Object.assign(state, value.extraData);
        break;
      case 'removeProperties':
        for (const val of value.keysToRemove) {
          delete state[val];
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
