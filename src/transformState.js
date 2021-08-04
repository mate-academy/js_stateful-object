'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      Object.assign(state, actions[i].extraData);
    } else if (actions[i].type === 'removeProperties') {
      for (let j = 0; j < actions[i].keysToRemove.length; j++) {
        for (const key in state) {
          if (key === actions[i].keysToRemove[j]) {
            delete state[key];
          }
        }
      }
    } else {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
