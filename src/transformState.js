'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case 'removeProperties':
        for (const removeElement of action.keysToRemove) {
          delete state[removeElement];
        }
        break;
      case 'clear':
        for (const element in state) {
          delete state[element];
        }
        break;
      default:
        break;
    }
  }
}

module.exports = transformState;
