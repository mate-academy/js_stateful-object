'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const i of actions) {
    if (i.type === 'addProperties') {
      for (const b in i.extraData) {
        state[b] = i.extraData[b];
      }
    }

    if (i.type === 'removeProperties') {
      for (const b of i.keysToRemove) {
        delete state[b];
      }
    }

    if (i.type === 'clear') {
      for (const b in state) {
        delete state[b];
      }
    }
  }

  return state;
}

module.exports = transformState;
