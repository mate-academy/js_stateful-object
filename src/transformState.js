'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const keys of actions) {
    if (keys.type === 'addProperties') {
      Object.assign(state, keys.extraData);
    } else if (keys.type === 'removeProperties') {
      for (const keyToDelete of keys.keysToRemove) {
        delete state[keyToDelete];
      }
    } else if (keys.type === 'clear') {
      for (const keyInstate in state) {
        delete state[keyInstate];
      }
    }
  }

  return state;
}

module.exports = transformState;
