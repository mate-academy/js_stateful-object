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
        for (const keyToRemove of action.keysToRemove) {
          delete changedState[keyToRemove];
        }
        break;

      case 'clear':
        Object.keys(changedState).forEach(key => delete changedState[key]);
        break;

      default:
        throw new Error('Invalid type of action');
    } ;
  }

  return changedState;
}

module.exports = transformState;
