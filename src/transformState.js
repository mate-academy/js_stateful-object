'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const key of actions) {
    switch (key.type) {
      case 'addProperties':
        Object.assign(state, key.extraData);
        break;

      case 'removeProperties':
        for (const property of key.keysToRemove) {
          delete state[property];
        }
        break;

      case 'clear':
      default:
        for (const property in state) {
          delete state[property];
        }
        break;
    }
  }
}
module.exports = transformState;
