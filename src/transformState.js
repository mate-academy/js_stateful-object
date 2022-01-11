'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      Object.assign(state, actions[i].extraData);
    } else if (actions[i].type === 'removeProperties') {
      for (const a of actions[i].keysToRemove) {
        delete state[a];
      }
    } else if (actions[i].type === 'clear') {
      for (const b in state) {
        delete state[b];
      }
    }
  }

  return state;
}

module.exports = transformState;
