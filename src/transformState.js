'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (const items of actions) {
    if (items.type === 'addProperties') {
      Object.assign(state, items.extraData);
    }

    if (items.type === 'removeProperties') {
      for (const index of items.keysToRemove) {
        delete state[index];
      }
    }

    if (items.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
