'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  // write code here

  for (const key of actions) {
    const { type, extraData, keysToRemove } = key;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;
      case 'removeProperties':
        for (const item of keysToRemove) {
          delete state[item];
        }
        break;
      case 'clear':
        for (const item in state) {
          delete state[item];
        }
        break;
      default:
        return 'Error';
    }
  }
}

module.exports = transformState;
