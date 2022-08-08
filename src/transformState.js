'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    if (actions[action].type === 'addProperties') {
      for (const data in actions[action].extraData) {
        state[data] = actions[action].extraData[data];
      }
    } else if (actions[action].type === 'removeProperties') {
      for (const key of actions[action].keysToRemove) {
        delete state[key];
      }
    } else {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
