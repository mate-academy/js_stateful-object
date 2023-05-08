'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  function removeProperties(object, keysToRemove) {
    for (const key of keysToRemove) {
      delete object[key];
    }
  }

  function clearObject(object) {
    for (const key in object) {
      delete object[key];
    }
  }

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case 'clear':
        clearObject(state);
        break;
      case 'removeProperties':
        removeProperties(state, action.keysToRemove);
        break;
      default:
        return state;
    }
  }

  return state;
}

module.exports = transformState;
