'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    switch (key.type) {
      case 'addProperties':
        Object.assign(state, key.extraData);
        break;

      case 'removeProperties':
        for (const element of key.keysToRemove) {
          delete state[element];
        }
        break;

      case 'clear':
        for (const keys in state) {
          delete state[keys];
        }
    }
  }

  return state;
}

module.exports = transformState;
