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
      for (const i of keys.keysToRemove) {
        delete state[i];
      }
      continue;
    }

    for (const j in state) {
      delete state[j];
    }
  }
}

module.exports = transformState;
