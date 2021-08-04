'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    } else if (action.type === 'removeProperties') {
      const { keysToRemove } = action;

      for (const key of keysToRemove) {
        delete state[key];
      }
    } else if (action.type === 'clear') {
      for (const property in state) {
        delete state[property];
      }
    }
  }
}

module.exports = transformState;
