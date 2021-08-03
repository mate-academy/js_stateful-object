'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const item of actions) {
    if (item.type === 'addProperties') {
      for (const key in item.extraData) {
        state[key] = item.extraData[key];
      }
    } else if (item.type === 'removeProperties') {
      for (const keyRemove of item.keysToRemove) {
        if (keyRemove in state) {
          delete state[keyRemove];
        }
      }
    } else if (item.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
