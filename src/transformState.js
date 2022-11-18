'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const actionObject of actions) {
    const actionType = actionObject['type'];

    switch (actionType) {
      case 'addProperties':
        addProperties(state, actionObject.extraData);
        break;

      case 'removeProperties':
        removeProperties(state, actionObject.keysToRemove);
        break;

      case 'clear':
        clear(state);
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
  for (const itemToRemove of toRemove) {
    delete state[itemToRemove];
  }
}

function clear(state) {
  for (const key in state) {
    delete state[key];
  }
}

module.exports = transformState;
