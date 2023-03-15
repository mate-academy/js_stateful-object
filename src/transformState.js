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
        continue;

      case 'removeProperties':
        for (const keyToRemove of action.keysToRemove) {
          delete changedState[keyToRemove];
        }
        continue;

      case 'clear':
        Object.keys(changedState).forEach(key => delete changedState[key]);
        continue;

      default:
        break;
    } ;
  }

  return changedState;
}

module.exports = transformState;
