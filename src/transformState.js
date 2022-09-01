'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    Object.assign(state, object.extraData);

    if (object.keysToRemove) {
      for (const x of object.keysToRemove) {
        if (x in state) {
          delete state[x];
        }
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
