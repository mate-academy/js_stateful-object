'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const data in action.extraData) {
          state[data] = action.extraData[data];
        }
        break;

      case 'removeProperties':
        for (const keyToRemove of action.keysToRemove) {
          if (keyToRemove in state) {
            delete state[keyToRemove];
          }
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
