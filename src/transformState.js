'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    } else if (actions[i].type === 'removeProperties') {
      for (let y = 0; y < actions[i].keysToRemove.length; y++) {
        if (state.hasOwnProperty(actions[i].keysToRemove[y])) {
          delete state[actions[i].keysToRemove[y]];
        }
      }
    } else if (actions[i].type === 'addProperties') {
      for (const a in actions[i].extraData) {
        state[a] = actions[i].extraData[a];
      }
    }
  }

  return state;
}

module.exports = transformState;
