'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (const i in actions) {
    if (actions[i].type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
      continue;
    }

    if (actions[i].type === 'addProperties') {
      for (const value in actions[i].extraData) {
        state[value] = actions[i].extraData[value];
      }
      continue;
    }

    if (actions[i].type === 'removeProperties') {
      for (const key of actions[i].keysToRemove) {
        if (state[key]) {
          delete state[key];
        }
      }
      continue;
    }
  }
}

module.exports = transformState;
