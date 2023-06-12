'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {

  for (const curentAction of actions) {
    switch (curentAction.type) {
      case 'addProperties':
        Object.assign(state, curentAction.extraData);

        break;

      case 'removeProperties':

        for (const key of curentAction.keysToRemove) {
          delete state[key];
        }

        break;

      case 'clear':

        for (const key in state) {
          delete state[key];
        }

        break;

      default:
        throw new Error('Unknown action type. Try again.');
    }
  }

  return state;
}

module.exports = transformState;
