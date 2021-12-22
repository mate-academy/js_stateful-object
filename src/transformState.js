'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    if (action.type === 'addProperties') {
      let newState = state;

      newState = Object.assign(newState, action.extraData);
    } else if (action.type === 'clear') {
      for (const member in state) {
        delete state[member];
      }
    } else if (action.type === 'removeProperties') {
      for (const removingProperty of action.keysToRemove) {
        delete state[removingProperty];
      }
    }
  }
}

module.exports = transformState;
