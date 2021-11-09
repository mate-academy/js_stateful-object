'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const direct of actions) {
    if (direct.type === 'addProperties') {
      Object.assign(state, direct.extraData);
    }

    if (direct.type === 'removeProperties') {
      for (const key of direct.keysToRemove) {
        if (key in state) {
          delete state[key];
        }
      }
    }

    if (direct.type === 'clear') {
      for (const key in state) {
        delete state[key];
      };
    }
  }
}

module.exports = transformState;
