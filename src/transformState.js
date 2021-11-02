'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const x of actions) {
    if (x.type === 'addProperties') {
      for (const i in x.extraData) {
        state[i] = x.extraData[i];
      }
    }

    if (x.type === 'removeProperties') {
      for (const i of x.keysToRemove) {
        delete state[i];
      }
    }

    if (x.type === 'clear') {
      for (const i in state) {
        delete state[i];
      }
    }
  }

  return state;
}

module.exports = transformState;
