'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj in actions) {
    if (actions[obj].type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (actions[obj].type === 'addProperties') {
      for (const key in actions[obj].extraData) {
        state[key] = actions[obj].extraData[key];
      }
    }

    if (actions[obj].type === 'removeProperties') {
      for (const key of actions[obj].keysToRemove) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
