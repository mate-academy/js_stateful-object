'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const data of action.keysToRemove) {
          delete state[data];
        }
        break;

      case 'clear':
        for (const data in state) {
          delete state[data];
        }
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
