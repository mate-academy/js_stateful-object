'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    if (object.type === 'removeProperties') {
      if (typeof (object.keysToRemove) === 'object') {
        for (const key of object.keysToRemove) {
          delete state[key];
        }
      } else {
        delete state[object.keysToRemove];
      }
    }

    if (object.type === 'addProperties') {
      Object.assign(state, object.extraData);
    }

    if (object.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
