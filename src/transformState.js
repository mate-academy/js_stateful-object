'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const prop in state) {
          delete state[prop];
        };
        break;

      case 'removeProperties':
        for (const keyToRemove of action.keysToRemove) {
          delete state[keyToRemove];
        };
        break;

      case 'addProperties':
        for (const [key, value] of Object.entries(action.extraData)) {
          state[key] = value;
        };
        break;

      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
