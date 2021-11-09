'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const value of actions) {
    if (value.type === 'addProperties') {
      for (const key in value.extraData) {
        state[key] = value.extraData[key];
      }
    }

    if (value.type === 'removeProperties') {
      for (const key of value.keysToRemove) {
        delete state[key];
      }
    }

    if (value.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
