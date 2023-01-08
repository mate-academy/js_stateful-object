'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }

        break;

      case 'addProperties':
        Object.assign(state, action.extraData);

        break;

      case 'removeProperties':

        for (const removedKey of action.keysToRemove) {
          delete state[removedKey];
        }
        break;

      default:
        throw new Error('unknown action type');
    }
  }

  return state;
}

module.exports = transformState;
