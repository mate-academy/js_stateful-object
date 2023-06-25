'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const { type, extraData, keysToRemove } of actions) {
    switch (type) {
      case 'addProperties': {
        for (const [key, value] of Object.entries(extraData)) {
          state[key] = value;
        }
        break;
      }

      case 'removeProperties': {
        for (const key of keysToRemove) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;
      }

      case 'clear': {
        for (const key in state) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;
      }

      default: {
        return 'Unknown action type';
      }
    }
  }
}

module.exports = transformState;
