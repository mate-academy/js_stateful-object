'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const key in action['extraData']) {
          state[key] = action['extraData'][key];
        };
        break;

      case 'removeProperties':
        for (const removeKey of action['keysToRemove']) {
          delete state[removeKey];
        };
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        };
        break;

      default:
        throw new Error(`Input is invalid - ${action.type}`);
    }
  }

  return state;
}

module.exports = transformState;
