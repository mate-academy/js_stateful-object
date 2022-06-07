'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const key of actions) {
    switch (key.type) {
      case 'addProperties':
        Object.assign(state, key.extraData);
        break;

      case 'removeProperties':
        for (const remove of key.keysToRemove) {
          if (state.hasOwnProperty(remove)) {
            delete state[remove];
          }
        }
        break;

      case 'clear':
        for (const clear in state) {
          delete state[clear];
        }
        break;
    }
  }
}

module.exports = transformState;
