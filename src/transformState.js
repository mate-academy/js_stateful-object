'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      for (const prop in actions[i].extraData) {
        state[prop] = actions[i].extraData[prop];
      }
    }

    if (actions[i].type === 'removeProperties') {
      for (const word in actions[i].keysToRemove) {
        delete state[actions[i].keysToRemove[word]];
      }
    }

    if (actions[i].type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
