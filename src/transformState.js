'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const part of actions) {
    const { type, extraData, keysToRemove } = part;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        for (const removeKeys of keysToRemove) {
          delete state[removeKeys];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        throw new Error('Invalid action');
    }
  }
}

module.exports = transformState;
