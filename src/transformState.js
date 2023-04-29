'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
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
        for (const property in state) {
          delete state[property];
        }
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
