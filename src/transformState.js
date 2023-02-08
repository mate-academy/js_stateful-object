'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const key in actions) {
    if (actions[key].type === 'addProperties') {
      for (const keys in actions[key].extraData) {
        state[keys] = actions[key].extraData[keys];
      }
    }

    if (actions[key].type === 'removeProperties') {
      for (const keys of actions[key].keysToRemove) {
        delete state[keys];
      }
    }

    if (actions[key].type === 'clear') {
      Object.keys(state).forEach(k => delete state[k]);
    }
  }
}
module.exports = transformState;
