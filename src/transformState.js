'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const deleteKeys in state) {
          delete state[deleteKeys];
        }
        break;

      case 'removeProperties':
        for (const propertiesToRemove of action.keysToRemove) {
          delete state[propertiesToRemove];
        }
        break;

      case 'addProperties':
        Object.assign(state, action.extraData);

        break;
    }
  }
}
module.exports = transformState;
