'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, action) {
  for (let i = 0; i < action.length; i++) {
    if (action[i].type === 'addProperties') {
      Object.assign(state, action[i].extraData);
    }

    if (action[i].type === 'removeProperties') {
      for (let k = 0; k < action[i].keysToRemove.length; k++) {
        delete state[action[i].keysToRemove[k]];
      }
    }

    if (action[i].type === 'clear') {
      for (const keys in state) {
        delete state[keys];
      }
    }
  }

  return state;
}

module.exports = transformState;
