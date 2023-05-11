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
        removeProperties(state, action.keysToRemove);
        break;

      case 'clear':
        clearState(state);
        break;

      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  }
}

function removeProperties(object, properties) {
  for (const property of properties) {
    delete object[property];
  }
}

function clearState(object) {
  for (const key in object) {
    delete object[key];
  }
}

module.exports = transformState;
