'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    for (const key in object) {
      if (object[key] === 'addProperties') {
        for (const iKey in object.extraData) {
          state[iKey] = object.extraData[iKey];
        }
      }

      if (object[key] === 'removeProperties') {
        for (const value of object.keysToRemove) {
          if (state[value]) {
            delete state[value];
          }
        }
      }

      if (object[key] === 'clear') {
        for (const iKey in state) {
          delete state[iKey];
        }
      }
    }
  }
}

module.exports = transformState;
