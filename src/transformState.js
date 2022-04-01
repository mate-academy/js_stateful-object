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
        for (let item = 0; item < actions[i].keysToRemove.length; item++) {
          delete state[actions[i].keysToRemove[item]];
        }
        break;

      case 'clear':
        for (const item in state) {
          delete state[item];
        }
        break;
    }
  }
}

module.exports = transformState;
