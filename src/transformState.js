'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    for (const types in object) {
      if (object[types] === 'addProperties') {
        Object.assign(state, object.extraData);
      }

      if (object[types] === 'removeProperties') {
        for (const key of object.keysToRemove) {
          if (!state.key) {
            delete state[key];
          }
        }
      }

      if (object[types] === 'clear') {
        for (const keys in state) {
          delete state[keys];
        }
      }
    }
  }
}
module.exports = transformState;
