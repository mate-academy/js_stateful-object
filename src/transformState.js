'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (action.type === 'addProperties') {
      for (const key in action.extraData) {
        state[key] = action.extraData[key];
      }
    }

    if (action.type === 'removeProperties') {
      for (const key in action.keysToRemove) {
        delete state[action.keysToRemove[key]];
      }
    }
  }
}

module.exports = transformState;
