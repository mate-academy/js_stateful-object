'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    const { extraData, keysToRemove } = action;

    switch (action.type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'clear':
        for (const property in state) {
          delete state[property];
        }
        break;

      case 'removeProperties':
        for (const each of keysToRemove) {
          delete state[each];
        }
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
