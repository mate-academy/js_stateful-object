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

  return state;
}

function remove(object, val) {
  for (const key of val) {
    delete object[key];
  }
}

function clear(object) {
  for (const key in object) {
    delete object[key];
  }
}

module.exports = transformState;
