'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object in actions) {
    switch (actions[object].type) {
      case 'addProperties':
        Object.assign(state, actions[object].extraData);
        break;

      case 'removeProperties':
        for (const char of actions[object].keysToRemove) {
          delete state[char];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        break;
    }
  }
}
module.exports = transformState;
