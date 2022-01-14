'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const key of actions) {
    if (key.type === 'addProperties') {
      for (const data in key.extraData) {
        state[data] = key.extraData[data];
      }
    } else if (key.type === 'clear') {
      for (const item in state) {
        delete state[item];
      }
    } else if (key.type === 'removeProperties') {
      for (const prop of key.keysToRemove) {
        delete state[prop];
      }
    }
  }

  return state;
}

module.exports = transformState;
