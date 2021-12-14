'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const key in action.extraData) {
          state[key] = action.extraData[key];
        }
        break;

      case 'removeProperties':
        for (const property of action.keysToRemove) {
          if (state.hasOwnProperty(property)) {
            delete state[property];
          }
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        return null;
    }
  }
}

module.exports = transformState;
