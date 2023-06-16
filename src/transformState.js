'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    for (const key in action) {
      if (action[key] === 'addProperties') {
        for (const data in action.extraData) {
          state[data] = action.extraData[data];
        }
      }

      if (action[key] === 'removeProperties') {
        for (const keyToRemove of action.keysToRemove) {
          delete state[keyToRemove];
        }
      }

      if (action[key] === 'clear') {
        for (const st in state) {
          delete state[st];
        }
      }
    }
  }
}

module.exports = transformState;
