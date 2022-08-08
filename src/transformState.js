'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    Object.assign(state, actions[i].extraData);

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
