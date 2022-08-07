'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i of actions) {
    if (i.type === 'addProperties') {
      Object.assign(state, i.extraData);
    }

    if (i.type === 'removeProperties') {
      for (const q of i.keysToRemove) {
        delete state[q];
      }
    }

    if (i.type === 'clear') {
      for (const x in state) {
        delete state[x];
      }
    }
  }
}

module.exports = transformState;
