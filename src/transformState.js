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
      for (const key of action.keysToRemove) {
        if (key in state) {
          delete state[key];
        }
      }
    }

    if (action.type === 'clear') {
      for (const q in state) {
        delete state[q];
      }
    }
  }
}

module.exports = transformState;
