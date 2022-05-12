'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action['type']) {
      case 'addProperties':
        for (const prop in action['extraData']) {
          state[prop] = action['extraData'][prop];
        }
        break;

      case 'removeProperties':
        for (const key of action['keysToRemove']) {
          for (const prop in state) {
            if (key === prop) {
              delete state[prop];
            }
          }
        }
        break;

      case 'clear':
        for (const prop in state) {
          delete state[prop];
        }
        break;
    }
  }
}

module.exports = transformState;
