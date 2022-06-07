'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const char of actions) {
    if (char.type === 'addProperties') {
      for (const exData in char.extraData) {
        state[exData] = char.extraData[exData];
      }
    }

    if (char.type === 'removeProperties') {
      for (const keyRemove of char.keysToRemove) {
        if (state.hasOwnProperty(keyRemove)) {
          delete state[keyRemove];
        }
      }
    }

    if (char.type === 'clear') {
      Object.getOwnPropertyNames(state).forEach(key => (delete state[key]));
    }
  }

  return state;
}

module.exports = transformState;
