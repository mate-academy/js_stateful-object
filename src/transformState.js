'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const prop in action.extraData) {
        state[prop] = action.extraData[prop];
      }
    }

    if (action.type === 'removeProperties') {
      for (const prop of action.keysToRemove) {
        delete state[prop];
      }
    }

    if (action.type === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    }
  }
}

module.exports = transformState;
