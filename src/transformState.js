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

      case 'removeProperties':
        for (let a = 0; a < actions[i].keysToRemove.length; a++) {
          delete state[actions[i].keysToRemove[a]];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        throw new Error('Unexpected command');
    }
  }
}

module.exports = transformState;
