'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      for (const key in actions[i].extraData) {
        state[key] = actions[i].extraData[key];
      }
    } else if (actions[i].type === 'removeProperties') {
      for (let y = 0; y < actions[i].keysToRemove.length; y++) {
        const removeItem = actions[i].keysToRemove[y];

        delete state[removeItem];
      }
    } else if (actions[i].type === 'clear') {
      for (const key in state) {
        const removeItem = key;

        delete state[removeItem];
      }
    }
  }
}

module.exports = transformState;
