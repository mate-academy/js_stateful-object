'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        for (const keys in actions[i].extraData) {
          state[keys] = actions[i].extraData[keys];
        }
        break;

      case 'removeProperties':
        for (let y = 0; y < actions[i].keysToRemove.length; y++) {
          delete state[actions[i].keysToRemove[y]];
        }
        break;

      case 'clear':
        for (const keys in state) {
          delete state[keys];
        }
        break;
    }
  }
}

module.exports = transformState;
