'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const i in actions) {
    switch (actions[i].type) {
      case 'addProperties' : {
        for (const key in actions[i].extraData) {
          state[key] = actions[i].extraData[key];
        }
        break;
      }

      case 'removeProperties': {
        for (const key in actions[i].keysToRemove) {
          if (state[actions[i].keysToRemove[key]]) {
            delete state[actions[i].keysToRemove[key]];
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
