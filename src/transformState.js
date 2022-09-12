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

    if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (action.type === 'removeProperties') {
      const arrKeysToRemove = action.keysToRemove;

      for (const key of arrKeysToRemove) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
