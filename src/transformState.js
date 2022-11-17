'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const { type, extraData: toAdd, keysToRemove: toDelete } of actions) {
    switch (type) {
      case 'addProperties':
        Object.assign(state, toAdd);
        break;

      case 'removeProperties':
        for (const toRemove of toDelete) {
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
