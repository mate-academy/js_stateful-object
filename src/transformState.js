'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const { type, extraData, keysToRemove } of actions) {
    switch (type) {
      case 'addProperties':
        for (const data in extraData) {
          state[data] = extraData[data];
        }
        break;
      case 'removeProperties':
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;
      case 'clear':
        for (const property in state) {
          delete state[property];
        }
        break;
      default:
        throw new Error('unknown action');
    };
  }

  return state;
}

module.exports = transformState;
