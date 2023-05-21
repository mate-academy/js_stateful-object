'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': {
        const { extraData } = action;

        for (const key in extraData) {
          state[key] = extraData[key];
        }
        break;
      }

      case 'removeProperties': {
        for (const keys of action.keysToRemove) {
          delete state[keys];
        }
        break;
      }

      case 'clear': {
        Object.keys(state).forEach(key => delete state[key]);
        break;
      }

      default:
    }
  }
}

module.exports = transformState;
