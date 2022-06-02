'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    if (key.type === 'addProperties') {
      Object.assign(state, key.extraData);
    } else if (key.type === 'removeProperties') {
      for (const keyToDelete of key.keysToRemove) {
        delete state[keyToDelete];
      }
    } else if (key.type === 'clear') {
      for (const keyInState in state) {
        delete state[keyInState];
      }
    }
  }

  return state;
}

module.exports = transformState;
