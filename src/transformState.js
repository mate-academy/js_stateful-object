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
      for (let n = 0; n < actions[i].keysToRemove.length; n++) {
        delete state[actions[i].keysToRemove[n]];
      }
    }

    if (actions[i].type === 'clear') {
      Object.keys(state).forEach(n => delete state[n]);
    }
  }

  return state;
}

module.exports = transformState;
