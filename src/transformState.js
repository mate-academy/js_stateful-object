'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const keys of actions) {
    if (keys.type === 'addProperties') {
      Object.assign(state, keys.extraData);
      continue;
    }

    if (keys.type === 'removeProperties') {
      for (const k of keys.keysToRemove) {
        delete state[k];
      }
      continue;
    }

    for (const key in state) {
      delete state[key];
    }
  }
}

module.exports = transformState;
