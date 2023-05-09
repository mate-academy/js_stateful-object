'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        add(state, action.extraData);
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

function add(object, data) {
  for (const key in data) {
    object[key] = data[key];
  }
}

function remove(object, data) {
  for (const key of data) {
    delete object[key];
  }
}

function clear(object) {
  for (const key in object) {
    delete object[key];
  }
}

module.exports = transformState;
