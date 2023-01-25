'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const extra in action.extraData) {
          state[extra] = action.extraData[extra];
        }
        break;

      case 'removeProperties':
        for (const rem in action.keysToRemove) {
          delete state[action.keysToRemove[rem]];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        throw new Error('Error');
    }
  }
}

module.exports = transformState;
