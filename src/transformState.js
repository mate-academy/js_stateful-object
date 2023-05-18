'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    for (const key in object) {
      if (key === 'extraData') {
        for (const k in object[key]) {
          state[k] = object[key][k];
        }
      }

      if (key === 'keysToRemove') {
        for (const k in object[key]) {
          delete state[object[key][k]];
        }
      }

      if (object[key] === 'clear') {
        for (const prop in state) {
          delete state[prop];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
