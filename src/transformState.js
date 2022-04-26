'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const x of actions) {
    if (x.type === 'addProperties') {
      Object.assign(state, x.extraData);
    }

    if (x.type === 'removeProperties') {
      for (const y of x.keysToRemove) {
        delete state[y];
      }
    }

    if (x.type === 'clear') {
      for (const k in state) {
        delete state[k];
      }
    }
  }
}

module.exports = transformState;
