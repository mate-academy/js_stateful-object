'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const index of actions) {
    if (index.type === 'addProperties') {
      for (const key in index.extraData) {
        state[key] = index.extraData[key];
      }
    } else if (index.type === 'removeProperties') {
      for (const property of index.keysToRemove) {
        if (state[property]) {
          delete state[property];
        }
      }
    } else if (index.type === 'clear') {
      for (const key1 in state) {
        delete state[key1];
      }
    }
  }

  return state;
}

module.exports = transformState;
