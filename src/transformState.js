'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      for (const action in actions[i].extraData) {
        state[action] = actions[i].extraData[action];
      }
    } else if (actions[i].type === 'removeProperties') {
      for (const action of actions[i].keysToRemove) {
        delete state[action];
      }
    } else if (actions[i].type === 'clear') {
      for (const stat in state) {
        delete state[stat];
      }
    }
  }

  return state;
}

module.exports = transformState;
