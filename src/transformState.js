'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (const i of actions) {
    if (i.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
      continue;
    }

    if (i.type === 'addProperties') {
      for (const value in i.extraData) {
        state[value] = i.extraData[value];
      }
      continue;
    }

    if (i.type === 'removeProperties') {
      for (const key of i.keysToRemove) {
        if (state[key]) {
          delete state[key];
        }
      }
      continue;
    }
  }
}

module.exports = transformState;
