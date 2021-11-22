'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  // write code here
  for (const a of actions) {
    if (a['type'] === 'addProperties') {
      Object.assign(state, a[`extraData`]);
    }

    if (a['type'] === 'removeProperties') {
      for (const rem of a['keysToRemove']) {
        if (state.hasOwnProperty(rem)) {
          delete state[rem];
        }
      }
    }

    if (a['type'] === `clear`) {
      for (const s in state) {
        delete state[s];
      }
    }
  }
}

module.exports = transformState;
