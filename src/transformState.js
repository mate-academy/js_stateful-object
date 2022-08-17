'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  // write code here

  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const key in action.extraData) {
        if (state[key]) {
          state[key] = action.extraData[key];
        }

        if (!state[key]) {
          state[key] = action.extraData[key];
        }
      }
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        if (state[key]) {
          delete state[key];
        }
      }
    }

    if (action.type === 'clear') {
      const allProperties = Object.keys(state);

      allProperties.forEach(key => {
        delete state[key];
      });
    }
  }

  return state;
}

module.exports = transformState;
