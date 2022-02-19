'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties': {
        Object.assign(state, actions[i].extraData);
        break;
      }

      case 'removeProperties': {
        for (const key in actions[i].keysToRemove) {
          delete state[actions[i].keysToRemove[key]];
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

  return state;
}

module.exports = transformState;
