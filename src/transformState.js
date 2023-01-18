'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const objects of actions) {
    switch (objects.type) {
      case 'addProperties':
        for (const keys in objects.extraData) {
          state[keys] = objects.extraData[keys];
        }

        break;

      case 'removeProperties':
        for (const remove of objects.keysToRemove) {
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
