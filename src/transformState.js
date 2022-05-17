'use strict';

/**
 * @param {Object} state
 * @param {Object[]} keysions
 */
function transformState(state, keysions) {
  for (const keys of keysions) {
    switch (keys.type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      case 'addProperties':
        Object.assign(state, keys.extraData);
        break;
      case 'removeProperties':
        for (const key of keys.keysToRemove) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
