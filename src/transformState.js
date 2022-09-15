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
        for (const key of action.keysToRemove) {
          if (state[key]) {
            delete state[key];
          }
        }
        break;

      case 'clear':
        if (state) {
          for (const key of Object.keys(state)) {
            delete state[key];
          }
        }
        break;

      default:
        return 'Error';
    }
  }
}

module.exports = transformState;
