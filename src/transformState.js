'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case (action.type === 'addProperties'):
        for (const key in action.extraData) {
          state[key] = action.extraData[key];
        }
        break;

      case (action.type === 'removeProperties'):
        for (const key in action.keysToRemove) {
          delete state[action.keysToRemove[key]];
        }
        break;

      default:
        for (const key in state) {
          delete state[key];
        }
    }
  }

  return state;
}

module.exports = transformState;
