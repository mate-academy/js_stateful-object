'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const newState = state;

  for (const currentAction of actions) {
    switch (currentAction.type) {
      case 'addProperties':
        Object.assign(newState, currentAction.extraData);
        break;

      case 'removeProperties':
        for (const keys of currentAction.keysToRemove) {
          delete newState[keys];
        }
        break;

      case 'clear':
        for (const item in newState) {
          delete newState[item];
        }
        break;

      default:
        return newState;
    }
  }
}

module.exports = transformState;
