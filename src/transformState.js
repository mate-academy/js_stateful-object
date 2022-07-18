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
        for (const keyremove of action.keysToRemove) {
          if (keyremove in state) {
            delete state[keyremove];
          }
        }
        break;

      case 'clear':
        for (const keyclear in state) {
          delete state[keyclear];
        }
        break;

      default:
        return state;
    }
  }
}

module.exports = transformState;
