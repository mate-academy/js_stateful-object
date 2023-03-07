'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const { type, keysToRemove, extraData } of actions) {
    switch (type) {
      case 'clear':
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;

      case 'removeProperties':
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;

      case 'addProperties':
        Object.assign(state, extraData);
        break;

      default:
        return 'Error: Action does not exist';
    }
  }
}

module.exports = transformState;
