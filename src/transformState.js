'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    if (type === 'addProperties') {
      for (const key in extraData) {
        state[key] = extraData[key];
      }
    }

    if (type === 'removeProperties') {
      for (const key of keysToRemove) {
        delete state[key];
      }
    }

    if (type === 'clear') {
      for (const element in state) {
        delete state[element];
      }
    }
  }

  return state;
}

module.exports = transformState;
