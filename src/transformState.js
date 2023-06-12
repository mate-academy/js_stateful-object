'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  function addProperties(extraData) {
    for (const [key, value] of Object.entries(extraData)) {
      state[key] = value;
    }
  }

  function clear() {
    for (const key in state) {
      delete state[key];
    }
  }

  function removeProperties(keysToRemove) {
    for (const key of keysToRemove) {
      delete state[key];
    }
  }

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        addProperties(action.extraData);
        break;
      case 'clear':
        clear();
        break;
      case 'removeProperties':
        removeProperties(action.keysToRemove);
        break;
      default:
        throw Error;
    }
  }

  return state;
}

module.exports = transformState;
