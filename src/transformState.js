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
    }

    if (actions[i].type === 'removeProperties') {
      for (let a = 0; a < actions[i].keysToRemove.length; a++) {
        delete state[actions[i].keysToRemove[a]];
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
