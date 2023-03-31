'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      const extraData = action.extraData;

      for (const [key, value] of Object.entries(extraData)) {
        state[key] = value;
      }
    } else if (action.type === 'removeProperties') {
      const keysToRemove = action.keysToRemove;

      for (const key of keysToRemove) {
        delete state[key];
      }
    } else if (action.type === 'clear') {
      for (const key of Object.keys(state)) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
