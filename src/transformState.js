'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const element of action.keysToRemove) {
          delete state[element];
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
