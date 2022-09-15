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
        for (const value of key.keysToRemove) {
          delete state[value];
        }
        break;

      case 'clear':
        for (const value in state) {
          delete state[value];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
