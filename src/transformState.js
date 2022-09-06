'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    for (const k in actions[i]) {
      if (actions[i][k] === 'addProperties') {
        Object.assign(state, actions[i].extraData);
      }

      if (actions[i][k] === 'removeProperties') {
        for (let j = 0; j < actions[i].keysToRemove.length; j++) {
          delete state[actions[i].keysToRemove[j]];
        }
      }

      if (actions[i][k] === 'clear') {
        for (const l in state) {
          delete state[l];
        }
      }
    }
  }
}

module.exports = transformState;
