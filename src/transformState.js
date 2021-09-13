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

    if (actions[i].type === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    }

    if (actions[i].type === 'removeProperties') {
      for (const char of actions[i].keysToRemove) {
        if (state.hasOwnProperty(char)) {
          delete state[char];
        }
      }
    }
  }
}

module.exports = transformState;
