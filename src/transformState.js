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
    }

    if (actions[i].type === 'removeProperties') {
      for (let n = 0; n < actions[i].keysToRemove.length; n++) {
        for (const keys in state) {
          if (actions[i].keysToRemove[n] === keys) {
            delete state[keys];
          }
        }
      }
    }

    if (actions[i].type === 'clear') {
      for (const keys in state) {
        delete state[keys];
      }
    }
  }
}

module.exports = transformState;
