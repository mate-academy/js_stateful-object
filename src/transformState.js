'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      if (action.extraData && typeof action.extraData === 'object') {
        Object.assign(state, action.extraData);
      }
    } else if (action.type === 'removeProperties') {
      if (action.keysToRemove && Array.isArray(action.keysToRemove)) {
        for (const key of action.keysToRemove) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
      }
    } else if (action.type === 'clear') {
      for (const key in state) {
        if (state.hasOwnProperty(key)) {
          delete state[key];
        }
      }
    }
  }
}

module.exports = transformState;
