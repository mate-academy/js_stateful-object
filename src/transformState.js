'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    Object.assign(state, actions[i].extraData);

    if (actions[i].keysToRemove) {
      const arr = Object.values(actions[i].keysToRemove);

      for (let y = 0; y < arr.length; y++) {
        delete state[arr[y]];
      }
    }

    if (actions[i].type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
