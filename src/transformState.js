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
        removeProperty(state, action.keysToRemove);
        break;

      case 'clear':
        clearObject(state);
        break;

      default:
        return state;
    }
  }
}

function removeProperty(object, properties) {
  for (const property of properties) {
    delete object[property];
  }
}

function clearObject(object) {
  for (const key in object) {
    delete object[key];
  }
}

module.exports = transformState;
