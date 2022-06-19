'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  const arr = Object.values(actions);

  for (const { type, extraData, keysToRemove } of arr) {
    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;
      case 'removeProperties':
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;
      case 'clear':
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;
      default:
        Object.assign(state, {});
    }
  }

  return state;
}

module.exports = transformState;
