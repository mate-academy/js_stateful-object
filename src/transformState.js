'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': {
        const extraData = action.extraData;

        for (const key of Object.keys(extraData)) {
          state[key] = extraData[key];
        }
        break;
      }

      case 'removeProperties': {
        const keysToRemove = action.keysToRemove;

        for (const key of keysToRemove) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;
      }

      case 'clear': {
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;
      }

      default: {
        // default case for error handling
        throw new Error(`Unknown action type: ${action.type}`);
      }
    }
  }

  return state;
}

module.exports = transformState;
