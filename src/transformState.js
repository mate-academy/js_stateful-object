'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const iterator of actions) {
    switch (iterator.type) {
      case 'addProperties': {
        for (const key in iterator.extraData) {
          state[key] = iterator.extraData[key];
        }
        break;
      }

      case 'removeProperties': {
        for (let i = 0; i <= iterator.keysToRemove.length - 1; i++) {
          delete state[iterator.keysToRemove[i]];
        }
        break;
      }

      case 'clear': {
        for (const key in state) {
          delete state[key];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
