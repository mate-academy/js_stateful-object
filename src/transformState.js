'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      Object.assign(state, actions[i].extraData);
    }

    if (actions[i].type === 'removeProperties') {
      for (const item of actions[i].keysToRemove) {
        delete state[item];
      }
    }

    if (actions[i].type === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    }
  }
}

module.exports = transformState;
