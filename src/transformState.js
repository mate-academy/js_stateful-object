'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const item of actions) {
    switch (item.type) {
      case 'addProperties':
        Object.assign(state, item.extraData);
        break;

      case 'clear':
        for (const prop in state) {
          delete state[prop];
        }
        break;

      case 'removeProperties':
        for (const char of item.keysToRemove) {
          if (state.hasOwnProperty(char)) {
            delete state[char];
          }
        }
    }
  }
}

module.exports = transformState;
