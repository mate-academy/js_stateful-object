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
        remove(state, action.keysToRemove);
        break;

      case 'clear':
        clear(state);
        break;
    }
  }
}

function remove(object, keysToRemove) {
  for (const key of keysToRemove) {
    delete object[key];
  }
}

function clear(object) {
  for (const key in object) {
    delete object[key];
  }
}

module.exports = transformState;
