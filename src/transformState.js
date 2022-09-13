'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const modifiedState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const removedKey of action.keysToRemove) {
          delete modifiedState[removedKey];
        }
        break;

      case 'clear':
        for (const clearedKey in state) {
          delete modifiedState[clearedKey];
        }
        break;
    }
  }

  return modifiedState;
}

module.exports = transformState;
