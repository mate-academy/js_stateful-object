'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const result of actions) {
    if (result.type === 'addProperties') {
      const mas = Object.keys(result.extraData);

      for (const key of mas) {
        state[key] = result.extraData[key];
      }
    } else if (result.type === 'removeProperties') {
      for (const key of result.keysToRemove) {
        delete state[key];
      }
    } else if (result.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  // return state;
}

module.exports = transformState;
