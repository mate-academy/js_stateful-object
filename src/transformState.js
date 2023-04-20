'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    if (key.type === 'clear') {
      for (const value in state) {
        delete state[value];
      }
    }

    if (key.type === 'addProperties') {
      Object.assign(state, key.extraData);
    }

    if (key.type === `removeProperties`) {
      for (const type of key.keysToRemove) {
        delete state[type];
      }
    }
  }
}

module.exports = transformState;
