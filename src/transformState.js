'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    switch (object.type) {
      case 'addProperties':
        Object.assign(state, object.extraData);
        break;

      case 'removeProperties':
        for (const index of object.keysToRemove) {
          delete state[index];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        return 'Wrong input';
    }
  }

  return state;
}

module.exports = transformState;
