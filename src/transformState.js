'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const [key, value] of Object.entries(action.extraData)) {
        state[key] = value;
      }
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete state[key];
      }
    }

    if (action.type === 'clear') {
      for (const key of Object.keys(state)) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
