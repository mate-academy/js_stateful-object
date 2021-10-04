'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    for (const val in action) {
      if (action[val] === 'removeProperties') {
        for (const del of action.keysToRemove) {
          delete state[del];
        }
      } else if (action[val] === 'addProperties') {
        Object.assign(state, action.extraData);
      } else if (action[val] === 'clear') {
        for (const key in state) {
          delete state[key];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
