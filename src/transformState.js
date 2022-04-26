'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'clear') {
      for (const del in state) {
        delete state[del];
      }
    } else if (actions[i].type === 'removeProperties') {
      for (let y = 0; y < actions[i].keysToRemove.length; y++) {
        delete state[actions[i].keysToRemove[y]];
      }
    } else if (actions[i].type === 'addProperties') {
      Object.assign(state, actions[i].extraData);
    }
  }

  return state;
}

module.exports = transformState;
