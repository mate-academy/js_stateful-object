'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const keys of actions) {
    switch (keys.type) {
      case 'addProperties':
        Object.assign(state, keys.extraData);
        break;
      case 'removeProperties':
        for (const keyToDelete of keys.keysToRemove) {
          delete state[keyToDelete];
        }
        break;
      case 'clear':
        for (const keyInstate in state) {
          delete state[keyInstate];
        }
        break;
      default:
      // do nothing
    }
  }

  return state;
}

module.exports = transformState;
