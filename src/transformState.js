'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const newState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'removeProperties':
        for (const keys of action.keysToRemove) {
          delete newState[keys];
        }

        break;

      case 'clear':
        for (const item in newState) {
          delete newState[item];
        }

        break;

      case 'addProperties':
        Object.assign(newState, action.extraData);

        break;

      default:
        return newState;
    }
  }
}

module.exports = transformState;
