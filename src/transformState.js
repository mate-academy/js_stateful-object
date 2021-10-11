'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    switch (actions[key].type) {
      case 'removeProperties':
        for (let i = 0; i < actions[key].keysToRemove.length; i++) {
          delete state[actions[key].keysToRemove[i]];
        }
        break;

      case 'addProperties':
        Object.assign(state, actions[key].extraData);
        break;

      case 'clear':
        for (const key3 in state) {
          delete state[key3];
        }
        break;

      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
