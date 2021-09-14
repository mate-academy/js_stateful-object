'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      for (const keys in actions[i].extraData) {
        state[keys] = actions[i].extraData[keys];
      }
    }

    if (actions[i].type === 'removeProperties') {
      for (let y = 0; y < actions[i].keysToRemove.length; y++) {
        delete state[actions[i].keysToRemove[y]];
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
