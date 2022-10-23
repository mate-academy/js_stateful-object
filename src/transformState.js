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
        for (const file of action.keysToRemove) {
          delete state[file];
        }
        break;

      case 'clear':
        for (const value in state) {
          delete state[value];
        }
        break;

      default:
    }
  }

  return state;
}

module.exports = transformState;
