'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    if (object.type === 'addProperties') {
      for (const addKey in object.extraData) {
        state[addKey] = object.extraData[addKey];
      }
    } else if (object.type === 'removeProperties') {
      for (const removeKey of object.keysToRemove) {
        delete state[removeKey];
      }
    } else {
      for (const stateKey in state) {
        delete state[stateKey];
      }
    }
  }
}

module.exports = transformState;
