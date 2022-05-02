'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    let {
      type,
      extraData,
      keysToRemove
    } = action;

    if (type === 'addProperties') {
      Object.assign(state, extraData);
    }

    if (type === 'removeProperties') {
      for (const key of keysToRemove) {
        delete state[key];
      }
    }

    if (type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
