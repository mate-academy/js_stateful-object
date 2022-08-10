'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    const { type, extraData, keysToRemove } = key;

    if (type === 'addProperties') {
      Object.assign(state, extraData);
    }

    if (type === 'removeProperties') {
      for (const a in keysToRemove) {
        delete state[keysToRemove[a]];
      }
    }

    if (type === 'clear') {
      for (const b in state) {
        delete state[b];
      }
    }
  }
}

module.exports = transformState;
