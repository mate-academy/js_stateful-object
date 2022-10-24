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
        for (const keyToDelete of action.keysToRemove) {
          delete state[keyToDelete];
        }

        break;

      case 'clear':
        for (const clear in state) {
          delete state[clear];
        }

        break;

      default:
        throw new Error(`Unknow type of action: ${action.type}`);
    }
  }

  return state;
}

module.exports = transformState;
