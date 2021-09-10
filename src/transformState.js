'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const properties of actions) {
    const { type, extraData, keysToRemove } = properties;

    if (type === 'addProperties') {
      for (const value in extraData) {
        state[value] = extraData[value];
      }
    } else if (type === 'removeProperties') {
      for (const value of keysToRemove) {
        for (const key in state) {
          if (value === key) {
            delete state[key];
          }
        }
      }
    } else {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
