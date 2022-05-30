'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    switch (key.type) {
      case 'addProperties':
        Object.assign(state, key.extraData);
        break;

      case 'removeProperties':
        for (const word of key.keysToRemove) {
          delete state[word];
        };
        break;

      default:
        for (const prop in state) {
          delete state[prop];
        }
    }
  }
}

module.exports = transformState;
