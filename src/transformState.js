'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const iterator of actions) {
    if (iterator.type === 'addProperties') {
      for (const key in iterator.extraData) {
        state[key] = iterator.extraData[key];
      }
    } else if (iterator.type === 'removeProperties') {
      for (const iterator1 of iterator.keysToRemove) {
        delete state[iterator1];
      }
    } else if (iterator.type === 'clear') {
      for (const key1 in state) {
        delete state[key1];
      }
    }
  }
}

module.exports = transformState;
