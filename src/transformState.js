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
    } else if (action.type === 'removeProperties') {
      const keysToRemove = action.keysToRemove;

      for (const key of keysToRemove) {
        if (state.hasOwnProperty(key)) {
          delete state[key];
        }
      }
    } else if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
