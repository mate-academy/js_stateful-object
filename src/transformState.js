'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, action) {
  let key;
  let key2;
  let key3;

  for (key of action) {
    if (key.type === 'addProperties') {
      for (key2 in key.extraData) {
        state[key2] = key.extraData[key2];
      }
    }

    if (key.type === 'removeProperties') {
      for (key2 of key.keysToRemove) {
        for (key3 in state) {
          if (key3 === key2) {
            delete state[key3];
          }
        }
      }
    }

    if (key.type === 'clear') {
      for (key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
