'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case action.type === 'clear':
        for (const key in state) {
          delete state[key];
        };
        break;

      case action.type === 'addProperties':
        for (const key in action.extraData) {
          const value = action.extraData[key];

          state[key] = value;
        }
        break;

      case action.type === 'removeProperties':
        for (const key in action.keysToRemove) {
          const removeKeys = action.keysToRemove[key];

          delete (state[removeKeys]);
        }
    }
  }

  return state;
}
module.exports = transformState;
