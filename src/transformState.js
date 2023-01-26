'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'clear') {
      for (const key of Object.keys(state)) {
        delete state[key];
      }
    }

    if (action.type === 'addProperties') {
      for (const data in action.extraData) {
        state[data] = action.extraData[data];
      }
    }

    if (action.type === 'removeProperties') {
      for (const data in action.keysToRemove) {
        delete state[action.keysToRemove[data]];
      }
    }
  }

  return state;
}

module.exports = transformState;
