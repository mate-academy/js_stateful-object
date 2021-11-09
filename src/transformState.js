'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const element in action.extraData) {
          state[element] = action.extraData[element];
        }
        break;
      case 'removeProperties':
        for (const element of action.keysToRemove) {
          delete state[element];
        }
        break;
      case 'clear':
        for (const element in state) {
          delete state[element];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
