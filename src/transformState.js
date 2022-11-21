'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const { type,
    extraData: propertiesToAdd,
    keysToRemove: propertiesToDelete } of actions) {
    switch (type) {
      case 'addProperties':
        Object.assign(state, propertiesToAdd);
        break;

      case 'removeProperties':
        for (const toRemove of propertiesToDelete) {
          delete state[toRemove];
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
