'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (action.type === 'removeProperties') {
      for (const keyToRemoveProperties of action.keysToRemove) {
        delete state[keyToRemoveProperties];
      }
    }

    if (action.type === 'addProperties') {
      for (const key in action.extraData) {
        state[key] = action.extraData[key];
      }
    }
  }
}

module.exports = transformState;
