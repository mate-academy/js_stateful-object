'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (const i of actions) {
    switch (i.type) {
      case 'addProperties':
        Object.assign(state, i.extraData);
        break;

      case 'removeProperties':
        for (const key of i.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
