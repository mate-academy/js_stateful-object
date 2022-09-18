'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const nextActions = [];

  for (const key1 of actions) {
    switch (key1.type) {
      case 'addProperties':
        Object.assign(state, key1.extraData);
        break;

      case 'removeProperties':
        for (const key2 of key1.keysToRemove) {
          delete state[key2];
        }
        break;

      case 'clear':
        for (const key3 in state) {
          delete state[key3];
        }
        break;

      default:
        throw Error('Error');
    }

    nextActions.push({ ...state });
  }

  return state;
}
module.exports = transformState;
