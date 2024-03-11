'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.hasOwnProperty('type') && action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }

    if (action.hasOwnProperty('type') && action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete state[key];
      }
    }

    if (action.hasOwnProperty('type') && action.type === 'clear') {
      const keys = Object.keys(state);

      for (const key of keys) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
