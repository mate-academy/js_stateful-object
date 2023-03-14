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
          for (const keys in state) {
            if (keys === keyToRemove) {
              delete state[keys];
            }
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
