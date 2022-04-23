'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const i in actions) {
    if (actions[i].type === 'addProperties') {
      Object.assign(state, actions[i].extraData);
    }

    if (actions[i].type === 'removeProperties') {
      for (const key of actions[i].keysToRemove) {
        delete state[key];
      }
    }

    if (actions[i].type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
