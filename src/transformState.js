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
        const { extraData } = action;

        for (const key in extraData) {
          state[key] = extraData[key];
        }

        break;

      case 'removeProperties':

        for (const key of action.keysToRemove) {
          delete state[key];
        }

        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
