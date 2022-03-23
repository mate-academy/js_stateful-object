'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const item in actions) {
    if (actions[item].type === 'addProperties') {
      Object.assign(state, actions[item].extraData);
    }

    if (actions[item].type === 'removeProperties') {
      for (const key in actions[item].keysToRemove) {
        if (state[actions[item].keysToRemove[key]]) {
          delete state[actions[item].keysToRemove[key]];
        }
      }
    }

    if (actions[item].type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return (state);
}

module.exports = transformState;
