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
      for (const property of action.keysToRemove) {
        if (state[property]) {
          delete state[property];
        }
      }
    }

    if (action.type === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    }
  }
}

module.exports = transformState;
