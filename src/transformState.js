'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const operation of actions) {
    switch (operation.type) {
      case 'addProperties': {
        Object.assign(state, operation.extraData);
        break;
      }

      case 'removeProperties': {
        for (const key of operation.keysToRemove) {
          delete state[key];
        };
        break;
      }

      case 'clear': {
        for (const key in state) {
          delete state[key];
        }
        break;
      }

      default: {
        break;
      }
    }
  }

  return state;
}

module.exports = transformState;
