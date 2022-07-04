'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        state[key] = undefined;
      }
    }

    if (action.type === 'clear') {
      for (const key in state) {
        state[key] = undefined;
      }
    }
  }
}

module.exports = transformState;
