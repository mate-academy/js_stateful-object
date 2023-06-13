'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const { type, extraData, keysToRemove } of actions) {
    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);

        break;

      case 'removeProperties':
        keysToRemove.forEach(key => {
          delete state[key];
        });

        break;

      case 'clear':
        Object.keys(state).forEach(key => {
          delete state[key];
        });

        break;

      default:
        throw new Error('Unknown Action');
    }
  }
}

module.exports = transformState;
