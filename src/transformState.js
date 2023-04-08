'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.keys(action.extraData).map(function(key) {
          state[key] = action.extraData[key];
        });
        break;

      case 'removeProperties':
        action.keysToRemove.map(function(key) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        });
        break;

      case 'clear':
        Object.keys(state).map(function(key) {
          delete state[key];
        });
        break;

      default:
        return 'Unknown action type';
    }
  }

  return state;
}
module.exports = transformState;
