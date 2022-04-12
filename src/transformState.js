'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const arr of actions) {
    if (arr.type === 'addProperties') {
      Object.assign(state, arr.extraData);
    }

    if (arr.type === 'removeProperties') {
      for (const keyToRemove of arr.keysToRemove) {
        delete state[keyToRemove];
      }
    }

    if (arr.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
