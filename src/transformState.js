'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const count in actions) {
    switch (actions[count].type) {
      case 'addProperties':
        for (const key in actions[count].extraData) {
          state[key] = actions[count].extraData[key];
        }
        break;

      case 'removeProperties':
        for (const key in actions[count].keysToRemove) {
          delete state[actions[count].keysToRemove[key]];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        return state;
    }
  }
}

module.exports = transformState;
