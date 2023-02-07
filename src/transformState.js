'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const push in action.extraData) {
          state[push] = action.extraData[push];
        }
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const del in state) {
          delete state[del];
        }
        break;

      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
