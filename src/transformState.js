'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    const actionType = action['type'];

    switch (actionType) {
      case 'addProperties':
        addProperties(state, action.extraData);
        break;

      case 'removeProperties':
        removeProperties(state, action.keysToRemove);
        break;

      case 'clear':
        clearProperties(state);
        break;

      default:

        break;
    }
  }
}

function addProperties(state, data) {
  for (const key in data) {
    state[key] = data[key];
  }
}

function removeProperties(state, toRemove) {
  for (const itemRemove of toRemove) {
    delete state[itemRemove];
  }
}

function clearProperties(state) {
  for (const key in state) {
    delete state[key];
  }
}

module.exports = transformState;
