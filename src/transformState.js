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
        for (const deleteKey of action.keysToRemove) {
          delete state[deleteKey];
        }

        break;

      case 'clear':
        for (const clear in state) {
          delete state[clear];
        }

        break;

      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
