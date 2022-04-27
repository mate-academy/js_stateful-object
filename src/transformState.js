'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    if (object.type === 'removeProperties') {
      for (const values of object.keysToRemove) {
        delete state[values];
      }
    }

    if (object.type === 'addProperties') {
      for (const pair in object.extraData) {
        state[pair] = object.extraData[pair];
      }
    }

    if (object.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
