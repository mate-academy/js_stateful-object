'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const item of actions) {
    switch (item.type) {
      case 'addProperties':
        addProperties(state, item.extraData);
        break;

      case 'removeProperties':
        removeProperties(state, item.keysToRemove);
        break;

      case 'clear':
        clear(state);
        break;

      default:
        break;
    }
  }

  return state;
}

function addProperties(state, item) {
  for (const key in item) {
    state[key] = item[key];
  }
}

function removeProperties(state, item) {
  for (const key of item) {
    delete state[key];
  }
}

function clear(state) {
  for (const key in state) {
    delete state[key];
  }
}

module.exports = transformState;
