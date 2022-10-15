'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const key in action.extraData) {
        state[key] = action.extraData[key];
      }
    } else if (action.type === 'removeProperties') {
      for (const i in action.keysToRemove) {
        delete state[action.keysToRemove[i]];
      }
    } else if (action.type === 'clear') {
      for (const u in state) {
        delete state[u];
      }
    }
  }

  return state;
}

module.exports = transformState;
