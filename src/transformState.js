'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    if (type === 'addProperties') {
      Object.assign(state, extraData);
    }

    if (type === 'removeProperties') {
      for (const key of keysToRemove) {
        if (key in state) {
          delete state[key];
        }
      }
    }

    if (type === 'clear') {
      const keys = Object.keys(state);

      for (const key of keys) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
