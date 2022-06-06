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
      for (let x = 0; x < actions[i].keysToRemove.length; x++) {
        if (actions[i].keysToRemove[x] in state) {
          delete state[actions[i].keysToRemove[x]];
        }
      }
    } else if (actions[i].type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
