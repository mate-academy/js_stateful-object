'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const a of actions) {
    if (a.type === 'addProperties') {
      Object.assign(state, a.extraData);
    } else if (a.type === 'removeProperties') {
      for (const b of a.keysToRemove) {
        delete state[b];
      }
    } else {
      for (const c in state) {
        delete state[c];
      }
    }
  }
}

module.exports = transformState;
