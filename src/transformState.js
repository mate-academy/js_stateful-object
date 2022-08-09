'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const { type, extraData, keysToRemove } of actions) {
    if (type === 'addProperties') {
      for (const key in extraData) {
        state[key] = extraData[key];
      }
    }

    if (type === 'removeProperties') {
      for (const key of keysToRemove) {
        delete state[key];
      }
    }

    if (type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
