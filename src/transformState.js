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
      for (const keys of action.keysToRemove) {
        delete state[keys];
      }
    }

    if (action.type === 'clear') {
      for (const keys in state) {
        delete state[keys];
      }
    }
  }
}

module.exports = transformState;
