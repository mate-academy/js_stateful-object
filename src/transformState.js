'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const char of actions) {
    switch (char['type']) {
      case 'addProperties' :
        for (const key in char['extraData']) {
          state[key] = char['extraData'][key];
        }
        break;
      case 'removeProperties' :
        for (const key of char['keysToRemove']) {
          delete state[key];
        }
        break;
      case 'clear' :
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
