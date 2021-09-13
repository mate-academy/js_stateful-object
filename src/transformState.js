'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const properties of actions) {
    const { type, extraData, keysToRemove } = properties;

    switch (type) {
      case 'addProperties':
        for (const value in extraData) {
          state[value] = extraData[value];
        }
        break;

      case 'removeProperties':
        for (const value of keysToRemove) {
          if (value in state) {
            delete state[value];
          }
        }
        break;

      default:
        for (const key in state) {
          delete state[key];
        }
    }
  }

  return state;
}

module.exports = transformState;
