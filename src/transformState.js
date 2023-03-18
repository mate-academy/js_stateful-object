'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const key in actions) {
    if (actions[key].type === 'addProperties') {
      Object.assign(state, actions[key].extraData);
    }

    if (actions[key].type === 'removeProperties') {
      for (const t in actions[key].keysToRemove) {
        if (actions[key].keysToRemove[t] in state) {
          delete state[actions[key].keysToRemove[t]];
        }
      }
    }

    if (actions[key].type === 'clear') {
      for (const n in state) {
        delete state[n];
      }
    }
  }
}

module.exports = transformState;
