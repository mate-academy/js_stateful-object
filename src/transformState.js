'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const type of actions) {
    switch (type.type) {
      case 'addProperties':
        Object.assign(state, type.extraData);

        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }

        break;

      case 'removeProperties':
        for (const keysToRemove of type.keysToRemove) {
          delete state[keysToRemove];
        }

        break;

      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
