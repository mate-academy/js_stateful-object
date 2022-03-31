'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i of actions) {
    if (i.type === 'addProperties') {
      Object.assign(state, i.extraData);
    } else if (i.type === 'removeProperties') {
      for (const k of i.keysToRemove) {
        delete state[k];
      }
    } else {
      for (const j in state) {
        delete state[j];
      }
    }
  }
}

module.exports = transformState;
