'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        for (const key1 in obj.extraData) {
          state[key1] = obj.extraData[key1];
        }
        break;

      case 'removeProperties':
        for (const key2 of obj.keysToRemove) {
          delete state[key2];
        }
        break;

      case 'clear':
        for (const key3 in state) {
          delete state[key3];
        }
        break;
    }
  }
}

module.exports = transformState;
