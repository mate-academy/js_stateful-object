'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const data in action.extraData) {
        state[data] = action.extraData[data];
      }
    }

    if (action.type === 'removeProperties') {
      for (const data of action.keysToRemove) {
        delete state[data];
      }
    }

    if (action.type === 'clear') {
      for (const data in state) {
        delete state[data];
      }
    }
  }
}

module.exports = transformState;
