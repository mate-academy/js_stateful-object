'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      const extraData = action.extraData;

      for (const key in extraData) {
        state[key] = extraData[key];
      }
    }

    if (action.type === 'removeProperties') {
      const keysToRemove = action.keysToRemove;

      for (const key of keysToRemove) {
        delete state[key];
      }
    }

    if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
