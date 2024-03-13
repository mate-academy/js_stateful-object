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
        };

        break;

      case 'addProperties':
        Object.assign(state, action.extraData);

        break;

      case 'removeProperties':
        for (const keyToRemove of action.keysToRemove) {
          delete state[keyToRemove];
        };

        break;

      default:
        throw new Error('Error');
    }
  }
}

module.exports = transformState;
