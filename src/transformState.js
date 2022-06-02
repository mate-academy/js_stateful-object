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
        for (const property of action.keysToRemove) {
          delete state[property];
        }
        break;

      case 'clear':
        for (const property in state) {
          delete state[property];
        }
        break;
    }
  }
}

module.exports = transformState;
