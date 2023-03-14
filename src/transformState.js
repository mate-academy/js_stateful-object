'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let changedState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        changedState = Object.assign(changedState, action.extraData);
        continue;

      case 'removeProperties':
        for (const keyToRemove of action.keysToRemove) {
          if (state.hasOwnProperty(keyToRemove)) {
            delete changedState[keyToRemove];
          }
        }
        continue;

      case 'clear':
        Object.keys(changedState).forEach(key => delete changedState[key]);
        continue;

      default:
        break;
    } ;
  }
}

module.exports = transformState;
