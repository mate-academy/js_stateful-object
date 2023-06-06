'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function modifyState(state, actions) {
  for (const action of actions) {
    const { type } = action;

    if (type === 'addProperties') {
      const { extraData } = action;

      Object.assign(state, extraData);
    } else if (type === 'removeProperties') {
      const { keysToRemove } = action;

      for (const key of keysToRemove) {
        if (state.hasOwnProperty(key)) {
          delete state[key];
        }
      }
    } else if (type === 'clear') {
      for (const key in state) {
        if (state.hasOwnProperty(key)) {
          delete state[key];
        }
      }
    }
  }
}

module.exports = modifyState;
