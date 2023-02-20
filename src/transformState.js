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

      default:
        Object.keys(state).forEach(key => {
          delete state[key];
        });
    }
  }
}

module.exports = transformState;
