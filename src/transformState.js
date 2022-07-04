'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const { type, extraData, keysToRemove } of actions) {
    switch (type) {
      case 'addProperties':
        for (const char in extraData) {
          state[char] = extraData[char];
        }

        break;

      case 'removeProperties':
        for (const char in state) {
          if (keysToRemove.includes(char)) {
            delete state[char];
          }
        }

        break;

      case 'clear':
        for (const char in state) {
          delete state[char];
        }

        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
