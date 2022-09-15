'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const item of actions) {
    switch (item.type) {
      case 'addProperties':
        Object.assign(state, item.extraData);
        break;
      case 'removeProperties':
        for (const key of item.keysToRemove) {
          delete state[key];
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      default:
        throw Error('Unknown action type');
    }
  }

  return state;
}

module.exports = transformState;
