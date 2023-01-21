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
    } else if (action.type === 'removeProperties') {
      for (const rem in action.keysToRemove) {
        delete state[action.keysToRemove[rem]];
      }
    } else {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
