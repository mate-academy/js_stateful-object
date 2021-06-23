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

    if (item.type === 'clear') {
      for (const all in state) {
        delete state[all];
      }
    }

    if (item.type === 'removeProperties') {
      for (const value of item.keysToRemove) {
        delete state[value];
      }
    }
  }
}

module.exports = transformState;
