'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const operation of actions) {
    switch (true) {
      case operation.type === 'addProperties': {
        Object.assign(state, operation.extraData);
        break;
      }

      case operation.type === 'removeProperties': {
        for (const property of operation.keysToRemove) {
          delete state[property];
        };
        break;
      }

      case operation.type === 'clear': {
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
