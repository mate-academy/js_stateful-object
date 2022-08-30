'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'addProperties':
        for (const key in action.extraData) {
          state[key] = action.extraData[key];
        }
        break;

      case 'removeProperties':
        for (const remKey of action.keysToRemove) {
          delete state[remKey];
        }
        break;

      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
