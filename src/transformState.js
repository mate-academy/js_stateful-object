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
        removeKeys(state, action.keysToRemove);
        break;

      case 'clear':
        removeKeys(state);
        break;

      default:
        throw new Error(`No ${action.type} action type found`);
    }
  }
}

function removeKeys(objectToClean, keys = Object.keys(objectToClean)) {
  for (const key of keys) {
    delete objectToClean[key];
  }
}

module.exports = transformState;
