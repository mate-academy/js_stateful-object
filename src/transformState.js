'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const item of actions) {
    switch (item.type) {
      case 'clear':
        for (const prop in state) {
          delete state[prop];
        }
        break;

      case 'removeProperties':
        for (const keyToRemove of item.keysToRemove) {
          if (state.hasOwnProperty(keyToRemove)) {
            delete state[keyToRemove];
          }
        }
        break;

      case 'addProperties':
        Object.assign(state, item.extraData);
        break;
    }
  }
}

module.exports = transformState;
