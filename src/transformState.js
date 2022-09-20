'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const key of actions) {
    switch (key.type) {
      case 'addProperties':
        for (const keyPron in key.extraData) {
          state[keyPron] = key.extraData[keyPron];
        };
        break;

      case 'removeProperties':
        for (const keyPron of key.keysToRemove) {
          delete state[keyPron];
        };
        break;

      case 'clear':
        for (const keyProp in state) {
          delete state[keyProp];
        }
    }
  }
}

module.exports = transformState;
