'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const item of actions) {
    for (const key in item) {
      if (key === 'extraData') {
        Object.assign(state, item[key]);
      }

      if (key === 'keysToRemove') {
        for (const k in item[key]) {
          delete state[item[key][k]];
        }
      }

      if (item[key] === 'clear') {
        for (const objKey in state) {
          delete state[objKey];
        }
      }
    }
  }
}

module.exports = transformState;
