'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    switch (key.type) {
      case 'addProperties': {
        Object.assign(state, key.extraData);
        break;
      }

      case 'removeProperties': {
        for (let i = 0; i < key.keysToRemove.length; i++) {
          delete state[key.keysToRemove[i]];
        }
        break;
      }

      case 'clear': {
        for (const forDelete in state) {
          delete state[forDelete];
        }
        break;
      }
    }
  }

  return state;
}

module.exports = transformState;
