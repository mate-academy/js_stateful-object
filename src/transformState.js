'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const indexAction in actions) {
    switch (actions[indexAction].type) {
      case 'addProperties':
        for (const key in actions[indexAction].extraData) {
          state[key] = actions[indexAction].extraData[key];
        }
        break;

      case 'removeProperties':
        for (const key of actions[indexAction].keysToRemove) {
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
