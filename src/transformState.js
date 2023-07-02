'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    switch (object.type) {
      case 'addProperties':
        for (const addKey in object.extraData) {
          state[addKey] = object.extraData[addKey];
        }

        break;
      case 'removeProperties':
        for (const removeKey of object.keysToRemove) {
          delete state[removeKey];
        }

        break;

      default:
        for (const stateKey in state) {
          delete state[stateKey];
        }
    }
  }
}

module.exports = transformState;
