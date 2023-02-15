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

      case 'clear':
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;

      case 'removeProperties':
        for (const data of action.keysToRemove) {
          delete state[data];
        }
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
