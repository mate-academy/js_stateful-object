'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const version of actions) {
    switch (version.type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'addProperties':
        Object.assign(state, version.extraData);
        break;

      case 'removeProperties':
        for (const key of version.keysToRemove) {
          delete state[key];
        }
        break;

      default:
        throw new Error('Unknown type');
    }
  }
}

module.exports = transformState;
