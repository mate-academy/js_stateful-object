'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const value of actions) {
    switch (value.type) {
      case 'addProperties':
        for (const key in value.extraData) {
          state[key] = value.extraData[key];
        }
        break;

      case 'removeProperties':
        for (const key of value.keysToRemove) {
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
