'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const item of actions) {
    if (item.type === 'addProperties') {
      Object.assign(state, item.extraData);
    }

    if (item.type === 'removeProperties') {
      for (const toDel of item.keysToRemove) {
        delete state[toDel];
      }
    }

    if (item.type === 'clear') {
      for (const clear in state) {
        delete state[clear];
      }
    }
  }
}

module.exports = transformState;
