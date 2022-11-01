'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const { type, extraData: toAdd, keysToRemove: toDelete } of actions) {
    if (type === 'addProperties') {
      Object.assign(state, toAdd);
    }

    if (type === 'removeProperties') {
      for (const i of toDelete) {
        delete state[i];
      }
    }

    if (type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
