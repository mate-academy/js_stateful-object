'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    switch (actions[action].type) {
      case 'addProperties':
        for (const key in actions[action].extraData) {
          state[key] = actions[action].extraData[key];
        }
        break;

      case 'removeProperties':
        for (const key of actions[action].keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
