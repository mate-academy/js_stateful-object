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
        for (let y = 0; y < actions[i].keysToRemove.length; y++) {
          delete state[actions[i].keysToRemove[y]];
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
        return 'Invalid request. Please, try again';
    }
  }
}

module.exports = transformState;
