'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        const { extraData } = action;

        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        const { keysToRemove } = action;

        removeProperties(state, keysToRemove);
        break;

      case 'clear':
        deleteAllProperties(state);
        break;

      default:
        return state;
    }
  }

  return state;
}

function removeProperties(object, propertiesToRemove) {
  for (const property of propertiesToRemove) {
    delete object[property];
  }
}

function deleteAllProperties(object) {
  for (const key in object) {
    delete object[key];
  }
}
module.exports = transformState;
