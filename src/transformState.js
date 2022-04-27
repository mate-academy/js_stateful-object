'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {

  for (const value of actions) {
    if (value.type === 'addProperties') {
      Object.assign(state, value.extraData);
    }

    if (value.type === 'removeProperties') {
      for (const value2 of value.keysToRemove) {
        if (state.hasOwnProperty(value2)) {
          delete state[value2];
        }
      }
    }

    if (value.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
