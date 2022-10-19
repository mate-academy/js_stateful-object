'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        Object.keys(state).forEach(key => {
          delete state[key];
        });
        break;

      case 'removeProperties':
        action.keysToRemove.forEach(key => {
          delete state[key];
        });
        break;

      case 'addProperties':
        for (const [key, value] of Object.entries(action.extraData)) {
          state[key] = value;
        }
        break;

      default:
        return 'Something went wrong';
    }
  }

  return state;
}

module.exports = transformState;
