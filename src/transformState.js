'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const index of actions) {
    switch (index.type) {
      case 'addProperties':
        for (const key in index.extraData) {
          state[key] = index.extraData[key];
        }
        break;

      case 'removeProperties':
        for (const key of index.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        return state;
    }
  }

  return state;
};

module.exports = transformState;
