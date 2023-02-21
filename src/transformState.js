'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    switch (object.type) {
      case 'addProperties':
        for (const keys in object.extraData) {
          state[keys] = object.extraData[keys];
        }

        break;

      case 'removeProperties':
        for (const remove of object.keysToRemove) {
          delete state[remove];
        }

        break;

      default:
        for (const deleteAll in state) {
          delete state[deleteAll];
        }
    }
  }

  return state;
}

module.exports = transformState;
