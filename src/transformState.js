'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        for (const key in actions[i].extraData) {
          state[key] = actions[i].extraData[key];
        };
        break;
      case 'removeProperties':
        for (const keyToRemove of actions[i].keysToRemove) {
          delete state[keyToRemove];
        }
        break;

      default:
        for (const keyOfState in state) {
          delete state[keyOfState];
        }
    }
  }
}

module.exports = transformState;
