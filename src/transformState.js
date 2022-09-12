'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // Main Loop:
  for (const action of actions) {
    switch (action['type']) {
      // For the type of 'addProperties':
      case 'addProperties':
        Object.assign(state, action['extraData']);
        break;

      // For the type of 'removeProperties':
      case 'removeProperties':
        for (const delItem of action['keysToRemove']) {
          delete state[delItem];
        }
        break;

      // For the type of 'clear':
      case 'clear':
        for (const delAllItem in state) {
          delete state[delAllItem];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
