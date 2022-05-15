'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let result = state;

  for (const key of actions) {
    for (const hey in key) {
      if (hey === `extraData`) {
        result = Object.assign(state, key[hey]);
      }

      if (key[hey] === 'clear') {
        for (const wey in result) {
          delete result[wey];
        }
      }

      if (hey === `keysToRemove`) {
        for (const sey of key[hey]) {
          delete result[sey];
        }
      }
    }
  }

  return result;
}

module.exports = transformState;
