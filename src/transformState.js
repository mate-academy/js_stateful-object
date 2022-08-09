'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const char of actions) {
    switch (char.type) {
      case 'addProperties':
        Object.assign(state, char.extraData);
        break;

      case 'removeProperties':
        for (const prop of char.keysToRemove) {
          delete state[prop];
        }
        break;

      case 'clear':
        for (const keys in state) {
          delete state[keys];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
