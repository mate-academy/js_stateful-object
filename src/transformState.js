'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case action.type === 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case action.type === 'removeProperties':
        for (const deletionElement of action.keysToRemove) {
          delete state[deletionElement];
        }
        break;

      case action.type === 'clear':
        for (const deletionElement in state) {
          delete state[deletionElement];
        }
        break;

      default:
        return state;
    }
  }
}

module.exports = transformState;
