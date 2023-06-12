'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        addProperties(state, action.extraData);
        break;

      case 'removeProperties':
        removeProperties(state, action.keysToRemove);
        break;

      case 'clear':
        clear(state);
        break;

      default:
        throw new Error();
    }
  }
}

function addProperties(state, data) {
  for (const key in data) {
    state[key] = data[key];
  }
}

function removeProperties(state, data) {
  for (const key of data) {
    if (state[key] !== undefined) {
      delete state[key];
    }
  }
}

function clear(state) {
  for (const key in state) {
    delete state[key];
  }
}

module.exports = transformState;
