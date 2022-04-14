'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const arr of actions) {
    switch (arr.type) {
      case 'addProperties':
        Object.assign(state, arr.extraData);
        break;
      case 'removeProperties':
        for (const keyToRemove of arr.keysToRemove) {
          delete state[keyToRemove];
        };
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        };
        break;
      default:
        continue;
    }
  }
}

module.exports = transformState;
