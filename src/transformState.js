'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const properties in action.extraData) {
        state[properties] = action.extraData[properties];
      }
    }

    if (action.type === 'removeProperties') {
      for (const properties of action.keysToRemove) {
        delete state[properties];
      }
    }

    if (action.type === 'clear') {
      for (const properties in state) {
        delete state[properties];
      }
    }
  }
}
module.exports = transformState;
