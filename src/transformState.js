'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const value of actions) {
    if (value.type === 'addProperties') {
      for (const elem in value.extraData) {
        state[elem] = value.extraData[elem];
      }
    };

    if (value.type === 'removeProperties') {
      for (const key of value.keysToRemove) {
        if (state[key] !== undefined) {
          delete state[key];
        }
      }
    };

    if (value.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
