'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // Main Loop:
  for (const action of actions) {
    // For the type of 'addProperties':
    if (action['type'] === 'addProperties') {
      for (const extraItem in action['extraData']) {
        state[extraItem] = action['extraData'][extraItem];
      }
      // For the type of 'removeProperties':
    } else if (action['type'] === 'removeProperties') {
      for (const delItem of action['keysToRemove']) {
        delete state[delItem];
      }
      // For the type of 'clear':
    } else if (action['type'] === 'clear') {
      for (const delAllItem in state) {
        delete state[delAllItem];
      }
    }
  }

  return state;
}

module.exports = transformState;
