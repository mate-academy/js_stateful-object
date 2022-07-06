'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const { type: actionType, extraData, keysToRemove } of actions) {
    switch (actionType) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        for (const keyToRemove of keysToRemove) {
          delete state[keyToRemove];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        throw new Error('Not supported action type');
    }
  }
}

module.exports = transformState;
