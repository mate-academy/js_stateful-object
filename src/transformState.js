'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const key in action.extraData) {
          state[key] = action.extraData[key];
        }
        break;

      case 'removeProperties':
        for (const i in action.keysToRemove) {
          delete state[action.keysToRemove[i]];
        }
        break;

      case 'clear':
        for (const u in state) {
          delete state[u];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
