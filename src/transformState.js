'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      case 'addProperties':
        for (const key in actions[i].extraData) {
          state[key] = actions[i].extraData[key];
        }
        break;
      case 'removeProperties':
        for (let q = 0; q < actions[i].keysToRemove.length; q++) {
          delete state[actions[i].keysToRemove[q]];
        }
        break;
      default:
        return state;
    }
  }
}

module.exports = transformState;
