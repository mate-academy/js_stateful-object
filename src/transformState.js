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
          delete state[key];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        throw new Error(`Unknown type of action: ${type}`);
    }
  }
}

module.exports = transformState;
