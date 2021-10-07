'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    const { extraData, keysToRemove, type } = action;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        for (const removeKey of keysToRemove) {
          delete state[removeKey];
        }
        break;

      case 'clear':
        for (const clearProp in state) {
          delete state[clearProp];
        }
        break;

      default:
    }
  }
}

module.exports = transformState;
