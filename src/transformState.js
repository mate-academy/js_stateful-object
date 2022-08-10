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
        for (const prop of action.keysToRemove) {
          delete state[prop];
        }
        break;

      case 'clear':
        for (const keys in state) {
          delete state[keys];
        }
        break;

      default:
        return 'Error';
    }
  }

  return state;
}

module.exports = transformState;
