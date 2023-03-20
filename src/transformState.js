'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    for (const value of Object.values(object)) {
      switch (value) {
        case 'addProperties':
          for (const [key1, value1] of Object.entries(object.extraData)) {
            state[key1] = value1;
          };
          break;
        case 'removeProperties':
          for (const key2 of object.keysToRemove) {
            delete state[key2];
          };
          break;
        case 'clear':
          for (const key3 of Object.keys(state)) {
            delete state[key3];
          };
          break;
      }
    }
  }
}

module.exports = transformState;
