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
      for (const item of key.keysToRemove) {
        delete state[item];
      }
    }

    if (key.type === 'clear') {
      Object.keys(state).forEach((item) => delete state[item]);
    }
  }
}

module.exports = transformState;
