'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const x of actions) {
    switch (x.type) {
      case 'addProperties':
        Object.assign(state, x.extraData);
        break;
      case 'removeProperties':
        for (const key of x.keysToRemove) {
          delete state[key];
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        throw new Error(`Unknown action type: ${x.type}`);
    }
  }

  return state;
}

module.exports = transformState;
