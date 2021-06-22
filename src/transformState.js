'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, action) {
  for (const key of action) {
    switch (key.type) {
      case 'addProperties' :
        Object.assign(state, key.extraData);
        break;

      case 'removeProperties' :
        for (let j = 0; j < key.keysToRemove.length; j++) {
          delete state[key.keysToRemove[j]];
        }
        break;

      case 'clear' :
        for (const clear in state) {
          delete state[clear];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
