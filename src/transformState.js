'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    if (object.type === 'addProperties') {
      Object.assign(state, object.extraData);
    }

    if (object.type === 'removeProperties') {
      for (const removeKey of object.keysToRemove) {
        delete state[removeKey];
      }
    }

    if (object.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
