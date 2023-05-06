'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        for (const key in actions[i].extraData) {
          state[key] = actions[i].extraData[key];
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      case 'removeProperties':
        for (const key of actions[i].keysToRemove) {
          delete state[key];
        }
        break;
      default:
        return 'Something went wrong';
    }
  }

  return state;
}

module.exports = transformState;
