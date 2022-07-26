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
      actions[i].keysToRemove.forEach((e) => delete state[e]);
    }

    if (actions[i].type === 'clear') {
      Object.keys(state).forEach((key) => delete state[key]);
    }
  }

  return state;
}

module.exports = transformState;
