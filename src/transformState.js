'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const obj in action.extraData) {
          state[obj] = action.extraData[obj];
        }
        break;
      case 'removeProperties':
        for (const obj of action.keysToRemove) {
          delete state[obj];
        }
        break;
      case 'clear':
        for (const obj in state) {
          delete state[obj];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
