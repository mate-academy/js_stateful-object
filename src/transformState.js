'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    if (actions[key].type === 'addProperties') {
      Object.assign(state, actions[key].extraData);
    };

    if (actions[key].type === 'removeProperties') {
      for (const keys in state) {
        if (actions[key].keysToRemove.includes(keys)) {
          delete state[keys];
        }
      }
    }

    if (actions[key].type === 'clear') {
      for (const keys in state) {
        delete state[keys];
      }
    }
  }

  return state;
}

module.exports = transformState;
