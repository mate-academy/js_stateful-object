'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const { type, extraData, keysToRemove } of actions) {
    switch (type) {
      case 'addProperties':
        for (const [key, value] of Object.entries(extraData)) {
          state[key] = value;
        };
        break;
      case 'removeProperties':
        for (const key of Object.values(keysToRemove)) {
          if (key in state) {
            delete state[key];
          }
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      default:
    }
  }
}

module.exports = transformState;
