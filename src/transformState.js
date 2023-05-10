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
      } else if (action[key] === 'removeProperties') {
        for (const data of action.keysToRemove) {
          delete state[data];
        }
      } else if (action[key] === 'clear') {
        for (const data in state) {
          delete state[data];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
