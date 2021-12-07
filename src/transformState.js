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
      Object.keys(state).forEach(function(key) {
        if (actions[i].keysToRemove.includes(key)) {
          delete state[key];
        }
      });
    } else {
      Object.keys(state).forEach(key => delete state[key]);
    }
  }
}

module.exports = transformState;
