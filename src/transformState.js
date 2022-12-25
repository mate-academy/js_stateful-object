'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const keys in action.extraData) {
        state[keys] = action.extraData[keys];
      }
    }

    if (action.type === 'removeProperties') {
      for (const properties of action.keysToRemove) {
        delete state[properties];
      }
    }

    if (action.type === 'clear') {
      for (const keys in state) {
        delete state[keys];
      }
    }
  }
}

module.exports = transformState;
