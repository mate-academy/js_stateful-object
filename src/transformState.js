'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (const n of actions) {
    if (n.type === 'addProperties') {
      Object.assign(state, n.extraData);
    }

    if (n.type === 'removeProperties') {
      for (const i of n.keysToRemove) {
        delete state[i];
      }
    }

    if (n.type === 'clear') {
      for (const s in state) {
        delete state[s];
      }
    }
  }

  return state;
}

module.exports = transformState;
