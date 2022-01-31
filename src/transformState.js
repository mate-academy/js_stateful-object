'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const modifiedState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const key in modifiedState) {
          delete modifiedState[key];
        }
        break;

      case 'addProperties':
        Object.assign(modifiedState, action.extraData);
        break;

      case 'removeProperties':
        for (const remove of action.keysToRemove) {
          delete modifiedState[remove];
        }
        break;
    }
  }

  return modifiedState;
}

module.exports = transformState;
