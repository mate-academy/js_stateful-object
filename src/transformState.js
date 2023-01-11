'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  function addProps(propsToAdd) {
    for (const key in propsToAdd) {
      state[key] = propsToAdd[key];
    }
  }

  function removeProps(propsToRemove) {
    for (const key of propsToRemove) {
      delete state[key];
    }
  }

  function clearAllProps() {
    for (const key in state) {
      delete state[key];
    }
  }

  for (const action of actions) {
    const { type, keysToRemove, extraData } = action;

    switch (type) {
      case 'addProperties':
        addProps(extraData);
        break;
      case 'removeProperties':
        removeProps(keysToRemove);
        break;
      case 'clear':
        clearAllProps();
        break;
      default:
        return actions;
    }
  }
}
module.exports = transformState;
