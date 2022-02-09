'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const prop of actions) {
    switch (prop['type']) {
      case 'addProperties':
        Object.assign(state, prop['extraData']);
        break;

      case 'removeProperties':
        for (const key of prop['keysToRemove']) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const char in state) {
          delete state[char];
        }
        break;

      default:
        return null;
    }
  }
}

module.exports = transformState;
