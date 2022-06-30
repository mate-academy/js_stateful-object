'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    if (object.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (object.type === 'addProperties') {
      for (const key in object.extraData) {
        state[key] = object.extraData[key];
      }
    }

    if (object.type === 'removeProperties') {
      for (const key of object.keysToRemove) {
        if (key in state) {
          delete state[key];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
