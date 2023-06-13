'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  function addProperties(extraData) {
    Object.assign(state, extraData);
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
        throw Error('action type is wrong');
    }
  }

  return state;
}

module.exports = transformState;
