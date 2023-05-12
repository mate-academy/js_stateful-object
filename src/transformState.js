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

      case 'clear':
        clearObject(state);

        break;

      case 'removeProperties':
        removeProperty(state, action.keysToRemove);

        break;

      default:
        throw new Error(`There is no such action type: ${action.type}`);
    }
  }
}

function clearObject(obj) {
  for (const key in obj) {
    delete obj[key];
  }
}

function removeProperty(state, properties) {
  for (const property of properties) {
    delete state[property];
  }
}

module.exports = transformState;
