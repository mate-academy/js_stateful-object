'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (actions[i].type === 'removeProperties') {
      for (const key in state) {
        if (actions[i].keysToRemove.includes(key)) {
          delete state[key];
        }
      }
    }

    if (actions[i].type === 'addProperties') {
      Object.assign(state, actions[i].extraData);
    }
  }
}

module.exports = transformState;
