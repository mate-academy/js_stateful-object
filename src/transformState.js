'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (const ket in actions) {
    if (actions[ket].type === 'addProperties') {
      Object.assign(state, actions[ket].extraData);
    }

    if (actions[ket].type === 'clear') {
      for (const up in state) {
        delete state[up];
      }
    }

    if (actions[ket].type === 'removeProperties') {
      for (const ho of actions[ket].keysToRemove) {
        delete state[ho];
      }
    }
  }
}

module.exports = transformState;
