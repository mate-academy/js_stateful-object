'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const { type, extraData, keysToRemove } of actions) {
    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;
        
      case 'removeProperties':
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;
        
      default:
        for (const key1 in state) {
          delete state[key1];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
