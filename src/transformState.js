'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const key of actions) {
    if (key.type === 'addProperties') {
      Object.assign(state, key.extraData);
    } else if (key.type === 'removeProperties') {
      for (const delKey of key.keysToRemove) {
        delete state[delKey];
      }
    } else if (key.type === 'clear') {
      for (const i in state) {
        delete state[i];
      }
    }
  }
}

module.exports = transformState;
