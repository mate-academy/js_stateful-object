'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const key of actions) {
    switch (key.type) {
      case 'addProperties':
        Object.assign(state, key.extraData);
        break;

      case 'removeProperties':
        for (const keys in key.keysToRemove) {
          delete state[key.keysToRemove[keys]];
        }
        break;

      case 'clear':
        for (const row in state) {
          delete state[row];
        }
    }
  }

  return state;
}

module.exports = transformState;
