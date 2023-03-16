'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(object => {
    switch (object.type) {
      case 'addProperties':
        for (const key in object.extraData) {
          state[key] = object.extraData[key];
        }
        break;
      case 'removeProperties':
        object.keysToRemove.forEach(key => {
          delete state[key];
        });
        break;

      default:
        for (const key in state) {
          delete state[key];
        }
    }

    return state;
  });
}

module.exports = transformState;
