'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const stateProperty in state) {
          delete state[stateProperty];
        }
        break;

      case 'addProperties':
        for (const property in action.extraData) {
          state[property] = action.extraData[property];
        }
        break;

      case 'removeProperties':
        for (const key in action.keysToRemove) {
          if (state.hasOwnProperty(action.keysToRemove[key])) {
            delete state[action.keysToRemove[key]];
          }
        }
        break;

      default:
    }
  }
}

module.exports = transformState;
