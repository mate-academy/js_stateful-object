'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const part of actions) {
    const { type } = part;
    const { extraData } = part;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        for (const keysToRemove of part.keysToRemove) {
          delete state[keysToRemove];
        }
        break;

      case 'clear':
        for (const keys in state) {
          delete state[keys];
        }
        break;

      default:
        throw new Error('Invalid action');
    }
  }
}

module.exports = transformState;
