'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    } else if ((action.type === 'removeProperties')) {
      for (const removedKey of action.keysToRemove) {
        delete state[removedKey];
      }
    } else {
      for (const clearing in state) {
        delete state[clearing];
      }
    }
  }
}

module.exports = transformState;
