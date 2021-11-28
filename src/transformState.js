'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; ++i) {
    if (actions[i].type === 'addProperties') {
      for (const key in actions[i].extraData) {
        state[key] = actions[i].extraData[key];
      }
    } else if (actions[i].type === 'removeProperties') {
      for (let j = 0; j < actions[i].keysToRemove.length; ++j) {
        delete state[actions[i].keysToRemove[j]];
      }
    } else {
      for (const k in state) {
        delete state[k];
      }
    }
  }
}

module.exports = transformState;
