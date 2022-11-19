'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const key in actions) {
    switch (key.type) {
      case 'addProperties' : {
        Object.assign(state, key. extraData);
        break;
      }

      case 'removeProperties': {
        for (let j = 0; j < actions[i].keysToRemove.length; j++) {
          if (state[actions[i].keysToRemove[j]]) {
            delete state[actions[i].keysToRemove[j]];
          }
        }
        break;
      }

      default : {
        for (const key in state) {
          delete state[key];
        }
      }
    }
  }
}

module.exports = transformState;
