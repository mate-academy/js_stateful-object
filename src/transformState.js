'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const item of actions) {
    switch (item.type) {
      case 'addProperties':
        for (const key in item.extraData) {
          state[key] = item.extraData[key];
        }
        break;
      case 'removeProperties':
        for (const keyRemove of item.keysToRemove) {
          if (keyRemove in state) {
            delete state[keyRemove];
          }
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
