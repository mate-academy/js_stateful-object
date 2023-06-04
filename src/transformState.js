'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case action.type === 'clear':
        Object.keys(state)
          .forEach(key => delete state[key]);
        break;

      case action.type === 'addProperties':
        for (const data in action.extraData) {
          state[data] = action.extraData[data];
        }
        break;

      case action.type === 'removeProperties':
        for (const key in action.keysToRemove) {
          delete state[action.keysToRemove[key]];
        }
    }
  }

  return state;
}

module.exports = transformState;
