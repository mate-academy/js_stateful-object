'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    for (const key in obj) {
      if (obj[key] === 'addProperties') {
        Object.assign(state, obj['extraData']);
      }

      if (obj[key] === 'removeProperties') {
        for (const n in state) {
          for (const name of obj['keysToRemove']) {
            if (n === name) {
              delete state[n];
            }
          }
        }
      }

      if (obj[key] === 'clear') {
        for (const k in state) {
          delete state[k];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
