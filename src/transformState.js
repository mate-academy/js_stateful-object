'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const data of actions) {
    switch (data.type) {
      case 'addProperties':
        Object.assign(state, data.extraData);
        break;

      case 'removeProperties':
        for (const value of data.keysToRemove) {
          delete state[value];
        }
        break;

      case 'clear':
        for (const value in state) {
          delete state[value];
        }
        break;

      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
