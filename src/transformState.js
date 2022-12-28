'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const keys in action.extraData) {
          state[keys] = action.extraData[keys];
        }
        break;

      case 'removeProperties':
        for (const properties of action.keysToRemove) {
          delete state[properties];
        }
        break;

      case 'clear':
        for (const keys in state) {
          delete state[keys];
        }
        break;

      default:
        throw new Error();
    }
  }
}

module.exports = transformState;
