'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const property in action.extraData) {
        state[property] = action.extraData[property];
      }
    } else if (action.type === 'removeProperties') {
      for (const property of action.keysToRemove) {
        if (property in state) {
          delete state[property];
        }
      }
    } else if (action.type === 'clear') {
      for (const property in state) {
        delete state[property];
      }
    }
  }
}

module.exports = transformState;
