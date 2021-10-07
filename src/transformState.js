'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    for (const key in object) {
      switch (object[key]) {
        case 'addProperties':
          for (const iKey in object.extraData) {
            state[iKey] = object.extraData[iKey];
          }
          break;

        case 'removeProperties':
          for (const value of object.keysToRemove) {
            if (state[value]) {
              delete state[value];
            }
          }
          break;

        case 'clear':
          for (const iKey in state) {
            delete state[iKey];
          }
          break;
      }
    }
  }
}

module.exports = transformState;
