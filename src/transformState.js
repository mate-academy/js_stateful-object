'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const extra in action.extraData) {
        state[extra] = action.extraData[extra];
      }
    }

    if (action.type === 'removeProperties') {
      for (const toRemove of action.keysToRemove) {
        delete state[toRemove];
      }
    }

    if (action.type === 'clear') {
      for (const cleared in state) {
        delete state[cleared];
      }
    }
  }
}

module.exports = transformState;
