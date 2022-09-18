'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const key1 of action.keysToRemove) {
          delete state[key1];
        }
        break;

      case 'clear':
        for (const key2 in state) {
          delete state[key2];
        }
        break;

      default:
        throw Error('Error');
    }
  }

  return state;
}
module.exports = transformState;
