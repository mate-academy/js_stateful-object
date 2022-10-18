'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    if (action.type === 'clear') {
      Object.keys(state).forEach(key => {
        delete state[key];
      });
    }

    if (action.type === 'removeProperties') {
      action.keysToRemove.forEach(key => {
        delete state[key];
      });
    }

    if (action.type === 'addProperties') {
      for (const [key, value] of Object.entries(action.extraData)) {
        state[key] = value;
      }
    }
  }

  return state;
}

module.exports = transformState;
