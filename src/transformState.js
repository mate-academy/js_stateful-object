'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (const item of actions) {
    if (item.type === 'addProperties') {
      Object.assign(state, item.extraData);
    }

    if (item.type === 'removeProperties') {
      for (const index of item.keysToRemove) {
        delete state[index];
      }
    }

    if (item.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
