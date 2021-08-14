'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const key of actions) {
    if (key.type === 'addProperties') {
      for (const j in key.extraData) {
        state[j] = key.extraData[j];
      }
    } else if (key.type === 'clear') {
      for (const k in state) {
        delete state[k];
      }
    } else if (key.type === 'removeProperties') {
      for (const i of key.keysToRemove) {
        delete state[i];
      }
    }
  }

  return state;
}

module.exports = transformState;
