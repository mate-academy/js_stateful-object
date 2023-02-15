'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  let newState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        newState = Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete newState[key];
        }
        break;

      case 'clear':
        for (const key in newState) {
          delete [key];
          delete newState[key];
        }
        break;

      default:
        throw new Error(`Unknown action type ${action.type}`);
    }
  }

  return newState;
}

module.exports = transformState;
