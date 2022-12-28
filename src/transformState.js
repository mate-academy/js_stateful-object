'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    if (key.type === 'addProperties') {
      Object.assign(state, key.extraData);
    }

    if (key.type === 'removeProperties') {
      key.keysToRemove.forEach(ch => delete state[ch]);
    }

    if (key.type === 'clear') {
      Object.keys(state).forEach(ch => delete state[ch]);
    }
  }
}

module.exports = transformState;
