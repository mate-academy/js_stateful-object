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
        }
        break;
      case 'removeProperties':
        for (const removable of action.keysToRemove) {
          delete state[removable];
        }
        break;
      case 'clear':
        for (const prop in state) {
          delete state[prop];
        }
        break;
      default:
        break;
    }
  }
}

module.exports = transformState;
