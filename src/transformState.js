'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    if (key.type === 'addProperties') {
      Object.assign(state, key.extraData);
    } else if (key.type === 'removeProperties') {
      for (const j of key.keysToRemove) {
        delete state[j];
      }
    } else if (key.type === 'clear') {
      for (const k in state) {
        delete state[k];
      }
    }
  }

  return state;
}

module.exports = transformState;
