'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        for (const key in actions[i].extraData) {
          state[key] = actions[i].extraData[key];
        }
        break;

      case 'removeProperties':
        for (const key of actions[i].keysToRemove) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;

      case 'clear':
        if (Object.keys(state).length !== 0) {
          for (const key in state) {
            delete state[key];
          }
        }
        break;

      default:
        return 0;
    }
  }

  return state;
}

module.exports = transformState;
