'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      for (const key in actions[i].extraData) {
        state[key] = actions[i].extraData[key];
      }
    } else if (actions[i].type === 'removeProperties') {
      for (const j of actions[i].keysToRemove) {
        delete state[j];
      }
    } else if (actions[i].type === 'clear') {
      for (const stateKey in state) {
        delete state[stateKey];
      }
    }
  }
}

module.exports = transformState;
