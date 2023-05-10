'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    const { type, extraData, keysToRemove } = key;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        for (const item of keysToRemove) {
          delete state[item];
        }
        break;

      default:
        for (const prop in state) {
          delete state[prop];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
