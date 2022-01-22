'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      for (const addKey in actions[i].extraData) {
        if (!state[addKey] || state[addKey] !== actions[i].extraData[addKey]) {
          state[addKey] = actions[i].extraData[addKey];
        }
      }
    } else if (actions[i].type === 'removeProperties') {
      for (let del = 0; del < actions[i].keysToRemove.length; del++) {
        if (state[actions[i].keysToRemove[del]]) {
          delete state[actions[i].keysToRemove[del]];
        }
      }
    } else if (actions[i].type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
