'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'clear') {
      for (const deleteKeys in state) {
        delete state[deleteKeys];
      }
    }

    if (action.type === 'removeProperties') {
      for (const propertiesToRemove of action.keysToRemove) {
        delete state[propertiesToRemove];
      }
    }

    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }
  }
}
module.exports = transformState;
