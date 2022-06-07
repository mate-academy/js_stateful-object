'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const j in actions) {
    if (actions[j].type === 'addProperties') {
      Object.assign(state, actions[j].extraData);
    } else
    if (actions[j].type === 'clear') {
      for (const key in state) {
        if (state.hasOwnProperty(key)) {
          delete state[key];
        }
      }
    } else
    if (actions[j].type === 'removeProperties') {
      for (const key in state) {
        for (let p = 0; p < actions[j].keysToRemove.length; p++) {
          if (actions[j].keysToRemove[p] === key) {
            delete state[key];
          }
        }
      }
    }
  }
}

module.exports = transformState;
