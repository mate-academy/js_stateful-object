'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const ch of actions) {
    if (ch.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (ch.type === 'addProperties') {
      Object.assign(state, ch.extraData);
    }

    if (ch.type === 'removeProperties') {
      for (const key of ch.keysToRemove) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
