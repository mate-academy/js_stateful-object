'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    const { type } = action;

    if (type === 'addProperties') {
      const { extraData } = action;

      Object.entries(extraData).forEach(([key, value]) => {
        state[key] = value;
      });
    } else if (type === 'removeProperties') {
      const { keysToRemove } = action;

      keysToRemove.forEach(key => {
        if (state.hasOwnProperty(key)) {
          delete state[key];
        }
      });
    } else if (type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  });
}

module.exports = transformState;
