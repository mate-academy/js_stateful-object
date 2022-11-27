'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const changedState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(changedState, action.extraData);
        break;

      case 'removeProperties':
        for (const property of action.keysToRemove) {
          delete changedState[property];
        }
        break;

      case 'clear':
        const keys = Object.keys(changedState);

        for (const key of keys) {
          delete changedState[key];
        }
        break;

      default:
        break;
    }
  }

  return changedState;
}

module.exports = transformState;
