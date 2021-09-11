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
    }

    if (key.type === 'removeProperties') {
      for (const property of key.keysToRemove) {
        delete state[property];
      }
    }

    if (key.type === 'clear') {
      for (const property in state) {
        delete state[property];
      }
    }
  }
}
module.exports = transformState;
