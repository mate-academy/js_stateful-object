'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);

        break;

      case 'removeProperties':
        keysToRemove.forEach((key) => delete state[key]);

        break;

      case 'clear':
        Object.keys(state).forEach((key) => delete state[key]);

        break;

      default:
        throw new Error('Invalid action type');
    }
  }

  return state;
}

module.exports = transformState;
