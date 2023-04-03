'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }

    if (action.type === 'removeProperties') {
      for (const keyToRemove of action.keysToRemove) {
        if (state.hasOwnProperty(keyToRemove)) {
          delete state[keyToRemove];
        }
      }
    }

    if (action.type === 'clear') {
      for (const key in state) {
        if (state.hasOwnProperty(key)) {
          delete state[key];
        }
      }
    }
  }
}

module.exports = transformState;
