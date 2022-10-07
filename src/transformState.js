'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const names of action.keysToRemove) {
          delete state[names];
        }
        break;

      case 'clear':
        for (const states in state) {
          delete state[states];
        }
        break;
      default:
        break;
    }
  }
}
module.exports = transformState;
