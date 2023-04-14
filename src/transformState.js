'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const key of actions) {
    const { type, extraData, keysToRemove } = key;

    switch (type) {
      case 'addProperties':
        for (const prop in extraData) {
          state[prop] = extraData[prop];
        }
        break;

      case 'removeProperties':
        for (const prop of keysToRemove) {
          delete state[prop];
        }
        break;

      case 'clear':
        for (const prop in state) {
          delete state[prop];
        }
        break;

      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
