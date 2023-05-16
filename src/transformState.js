'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function removeProperties(object, params) {
  for (const property of params) {
    delete object[property];
  }
}

function clear(object) {
  for (const key in object) {
    delete object[key];
  }
}

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
        clear(state);

        break;

      default:
        throw new Error(`${action.type} is not defined !`);
    }
  }
}

module.exports = transformState;
