'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const value in action.extraData) {
          state[value] = (action.extraData)[value];
        }
        break;
      case 'removeProperties':
        for (const value of action.keysToRemove) {
          delete state[value];
        }
        break;
      case 'clear':
        for (const value in state) {
          delete state[value];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
