'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': {
        const extraData = action.extraData;

        Object.assign(state, extraData);
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
        for (const key in state) {
          delete state[key];
        }
        break;
      }
      default:
        break;
    }
  }
}

module.exports = transformState;
