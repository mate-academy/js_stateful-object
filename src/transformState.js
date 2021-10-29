'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    switch (key.type) {
      case 'addProperties':
        for (const add in key.extraData) {
          state[add] = key.extraData[add];
        }
        break;

      case 'removeProperties':
        for (const remove of key.keysToRemove) {
          delete state[remove];
        }
        break;

      case 'clear':
        for (const clear in state) {
          delete state[clear];
        }

        break;

      default:
        return 'Error';
    }
  }

  return state;
}

module.exports = transformState;
