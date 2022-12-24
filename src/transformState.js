'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const item of actions) {
    if (item.type === 'addProperties') {
      Object.assign(state, item.extraData);
    }

    if (item.type === 'removeProperties') {
      for (const key of item.keysToRemove) {
        delete state[key];
      }
    }

    if (item.type === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    }
  }
}

module.exports = transformState;
