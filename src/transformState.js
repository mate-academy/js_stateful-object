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
      default:
        clear(state);
    }
  }
}

function removeProperties(obj, arr) {
  for (const property of arr) {
    delete obj[property];
  }
}

function clear(obj) {
  for (const key in obj) {
    delete obj[key];
  }
}

module.exports = transformState;
