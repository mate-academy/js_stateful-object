'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const data in action.extraData) {
        state[data] = action.extraData[data];
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
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
