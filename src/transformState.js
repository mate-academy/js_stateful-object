'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const [key, value] of Object.entries(action.extraData)) {
          state[key] = value;
        }
        break;
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;
      case 'clear':
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;
      default:
        break;
    }
  }
}

module.exports = transformState;
