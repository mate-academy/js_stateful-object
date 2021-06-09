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
      for (const keys of key.keysToRemove) {
        delete state[keys];
      }
    }
  }
}

module.exports = transformState;
