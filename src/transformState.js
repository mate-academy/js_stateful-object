'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const changingState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'removeProperties':
        for (const keys of action.keysToRemove) {
          delete changingState[keys];
        }

        break;

      case 'clear':
        for (const item in changingState) {
          delete changingState[item];
        }

        break;

      case 'addProperties':
        Object.assign(changingState, action.extraData);

        break;

      default:
        return changingState;
    }
  }
}

module.exports = transformState;
