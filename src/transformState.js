'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    const { type } = action;

    if (type === 'addProperties') {
      const { extraData } = action;

      for (const key in extraData) {
        state[key] = extraData[key];
      }
    }

    if (type === 'removeProperties') {
      const { keysToRemove } = action;

      for (const keys of keysToRemove) {
        delete state[keys];
      }
    }

    if (type === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    }
  }
}

module.exports = transformState;
