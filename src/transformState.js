'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        addProperties(state, action);
        break;

      case 'removeProperties':
        removeProperties(state, action);
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

function addProperties(state, action) {
  for (const data in action.extraData) {
    state[data] = action.extraData[data];
  }
}

function removeProperties(state, action) {
  for (const key of action.keysToRemove) {
    delete state[key];
  }
}

function clear(state) {
  for (const key in state) {
    delete state[key];
  }
}

module.exports = transformState;
