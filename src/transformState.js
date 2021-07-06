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
      for (let k = 0; k < actions[i].keysToRemove.length; k++) {
        if (state[actions[i].keysToRemove[k]]) {
          delete state[actions[i].keysToRemove[k]];
        }
      }
    }

    if (actions[i].type === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    }
  }
}

module.exports = transformState;
