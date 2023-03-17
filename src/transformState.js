'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    for (const [key, value] of Object.entries(actions[i])) {
      if (key === 'type' && value === 'addProperties') {
        for (const [key1, value1] of Object.entries(actions[i].extraData)) {
          state[key1] = value1;
        }
      };

      if (key === 'type' && value === 'removeProperties') {
        for (const key2 of actions[i].keysToRemove) {
          delete state[key2];
        }
      };

      if (key === 'type' && value === 'clear') {
        for (const key3 of Object.keys(state)) {
          delete state[key3];
        }
      }
    }
  }
}

module.exports = transformState;
