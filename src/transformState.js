'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const data in action.extraData) {
          state[data] = action.extraData[data];
        };
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete state[key];
        };
        break;

      default:
        for (const item in state) {
          delete state[item];
        };
    }
  }
}

module.exports = transformState;
