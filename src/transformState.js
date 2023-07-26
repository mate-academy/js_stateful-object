'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'removeProperties':
        for (const keyToRemove of action.keysToRemove) {
          delete state[keyToRemove];
        }
        break;

      case 'addProperties':
        for (const extraKey in action.extraData) {
          state[extraKey] = action.extraData[extraKey];
        }
        break;

      default: ;
    }
  }
}

module.exports = transformState;
