'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    const { type } = action;

    if (type === 'addProperties') {
      const { extraData } = action;

      for (const key in extraData) {
        state[key] = extraData[key];
      }
    } else if (type === 'removeProperties') {
      const { keysToRemove } = action;

      for (const key of keysToRemove) {
        if (key in state) {
          delete state[key];
        }
      }
    } else if (type === 'clear') {
      for (const key of Object.keys(state)) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
