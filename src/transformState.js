'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const { type, extraData, keysToRemove } of actions) {
    switch (type) {
      case 'addProperties':
        for (const key in extraData) {
          state[key] = extraData[key];
        }
        break;

      case 'removeProperties':
        for (const key of keysToRemove) {
          if (key in state) {
            delete state[key];
          }
        }
        break;

      default:
        for (const key in state) {
          delete state[key];
        }
    }
  }
}

module.exports = transformState;
