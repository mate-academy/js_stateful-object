'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': {
        addProperties(state, action.extraData);
        break;
      }

      case 'removeProperties': {
        removeProperties(state, action.keysToRemove);
        break;
      }

      case 'clear': {
        clearProperties(state);
        break;
      }
    }
  }

  return state;
}

function addProperties(state, extraData) {
  Object.assign(state, extraData);

  return state;
}

function removeProperties(state, extraData) {
  for (const removedKey of extraData) {
    delete state[removedKey];
  }

  return state;
}

function clearProperties(state) {
  for (const clearedKey in state) {
    delete state[clearedKey];
  }

  return state;
}

module.exports = transformState;
