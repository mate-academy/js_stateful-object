'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, ...actions) {
  for (const action of actions) {
    for (const obj in action) {
      if (action[obj].type === 'clear') {
        for (const key in state) {
          delete state[key];
        }
      }

      if (action[obj].type === 'addProperties') {
        for (const key in action[obj].extraData) {
          const value = action[obj].extraData[key];

          state[key] = value;
        }
      }

      if (action[obj].type === 'removeProperties') {
        for (const key in action[obj].keysToRemove) {
          const removeKeys = action[obj].keysToRemove[key];

          delete (state[removeKeys]);
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
