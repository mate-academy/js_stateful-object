'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData } = action;
    let { keysToRemove } = action;

    switch (type) {
      case 'addProperties': {
        for (const [key, value] of Object.entries(extraData)) {
          state[key] = value;
        }

        break;
      }

      case 'clear':
        keysToRemove = Object.keys(state);
        // fallsthrough

      case 'removeProperties': {
        for (const key of keysToRemove) {
          delete state[key];
        }

        break;
      }

      default: {
        break;
      }
    }
  }
}

module.exports = transformState;
