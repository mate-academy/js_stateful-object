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
      for (const deleteKey of key.keysToRemove) {
        delete state[deleteKey];
      }
    } else if (key.type === 'clear') {
      for (const clearKey in state) {
        delete state[clearKey];
      }
    }
  }

  return state;
}

module.exports = transformState;
