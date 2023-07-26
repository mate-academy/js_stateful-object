'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const key in action.extraData) {
          state[key] = action.extraData[key];
        }
        break;
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;
      case 'clear':
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;
      default:
        throw new Error('Unexpected option');
    }
  }

  return state;
}

module.exports = transformState;
