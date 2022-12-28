'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const operation of actions) {
    switch (operation.type) {
      case 'addProperties':
        Object.assign(state, operation.extraData);
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'removeProperties':
        for (const removeKey of operation.keysToRemove) {
          delete state[removeKey];
        }
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
