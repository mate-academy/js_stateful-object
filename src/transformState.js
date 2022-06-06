'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const array of actions) {
    if (array.type === 'addProperties') {
      for (const prop in array.extraData) {
        state[prop] = array.extraData[prop];
      }
    }

    if (array.type === 'clear') {
      for (const ch in state) {
        delete state[ch];
      };
    }

    if (array.type === 'removeProperties') {
      for (const prop of array.keysToRemove) {
        delete state[prop];
      }
    }
  }

  return state;
}

module.exports = transformState;
