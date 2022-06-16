'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': {
        for (const key of Object.keys(action.extraData)) {
          state[key] = action.extraData[key];
        }
        break;
      }

      case 'removeProperties': {
        for (const keyToRemove of action.keysToRemove) {
          if (state[keyToRemove]) {
            delete state[keyToRemove];
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
    }
  }
}

module.exports = transformState;
