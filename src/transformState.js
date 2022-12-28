'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action['type']) {
      case 'addProperties':
        for (const data in action.extraData) {
          state[data] = action.extraData[data];
        }
        break;

      case 'removeProperties':
        for (const toRemove of action.keysToRemove) {
          delete state[toRemove];
        }
        break;

      case 'clear':
        for (const toClear in state) {
          delete state[toClear];
        }
        break;

      default:
        throw new Error('Unexpected state');
    }
  }

  return state;
}

module.exports = transformState;
