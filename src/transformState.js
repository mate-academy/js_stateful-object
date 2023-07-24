'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const keys of actions) {
    const { type, extraData, keysToRemove } = keys;

    if (type === 'addProperties') {
      Object.assign(state, extraData);
    }

    if (type === 'removeProperties') {
      for (const keys1 of keysToRemove) {
        delete state[keys1];
      }
    }

    if (type === 'clear') {
      for (const keys2 in state) {
        delete state[keys2];
      }
    }
  }

  return state;
}

module.exports = transformState;
