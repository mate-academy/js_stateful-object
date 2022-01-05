'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        deleteAllProperties(state);
        break;
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case 'removeProperties':
        deleteProperties(state, action.keysToRemove);
        break;
      default:
    }
  }
}

function deleteAllProperties(state) {
  for (const key in state) {
    delete state[key];
  }
}

function deleteProperties(state, keysToRemove) {
  for (const key of keysToRemove) {
    delete state[key];
  }
}

module.exports = transformState;
