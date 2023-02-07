'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    for (const key in obj) {
      if (key === 'extraData') {
        for (const push in obj[key]) {
          const data = obj[key];

          state[push] = data[push];
        }
      }

      if (key === 'keysToRemove') {
        for (const result in state) {
          for (const remove of obj[key]) {
            if (result === remove) {
              delete state[remove];
            }
          }
        }
      }

      if (obj[key] === 'clear') {
        for (const result in state) {
          delete state[result];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
