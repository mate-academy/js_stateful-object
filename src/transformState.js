'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
*/

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        removeSpecificKeys(action);
        break;

      case 'clear':
        removeAllKeys();
        break;

      default:
        throw new Error(`No ${action.type} action type found`);
    }
  }

  function removeAllKeys() {
    for (const key in state) {
      delete state[key];
    }
  }

  function removeSpecificKeys(arrayToClean) {
    for (const key of arrayToClean.keysToRemove) {
      delete state[key];
    }
  }
}

module.exports = transformState;
