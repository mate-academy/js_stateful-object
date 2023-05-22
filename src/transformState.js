'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach((action) => {
    if (action.type === 'addProperties' && action.extraData) {
      Object.assign(state, action.extraData);
    } else if (action.type === 'removeProperties' && action.keysToRemove) {
      action.keysToRemove.forEach((key) => {
        if (state.hasOwnProperty(key)) {
          delete state[key];
        }
      });
    } else if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  });
}

module.exports = transformState;
