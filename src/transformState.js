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
        for (const propToDelete of action.keysToRemove) {
          delete state[propToDelete];
        }
        break;

      case 'clear':
        for (const propToDeleteAll in state) {
          delete state[propToDeleteAll];
        }
        break;

      default:
        return 'Unknown action type';
    }
  }

  return state;
}

module.exports = transformState;
