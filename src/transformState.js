'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action['type'] === 'addProperties') {
      for (const extraItem in action['extraData']) {
        state[extraItem] = action['extraData'][extraItem];
      }
    } else if (action['type'] === 'removeProperties') {
      for (const delItem of action['keysToRemove']) {
        delete state[delItem];
      }
    } else if (action['type'] === 'clear') {
      for (const delAllItem in state) {
        delete state[delAllItem];
      }
    }
  }

  return state;
}

module.exports = transformState;
