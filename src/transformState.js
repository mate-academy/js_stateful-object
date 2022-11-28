'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action['extraData']);
        break;

      case 'removeProperties':
        for (const removeProp of action['keysToRemove']) {
          delete state[removeProp];
        }
        break;

      case 'clear':
        for (const prop in state) {
          delete state[prop];
        }
        break;

      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
