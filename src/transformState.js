'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    if (actions[key].type === 'addProperties') {
      for (const val in actions[key].extraData) {
        state[val] = actions[key].extraData[val];
      }
    } else if (actions[key].type === 'removeProperties') {
      for (const name of actions[key].keysToRemove) {
        delete state[name];
      }
    } else if (actions[key].type === 'clear') {
      for (const val in state) {
        delete state[val];
      }
    }
  }
}

module.exports = transformState;
