'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  function addProps(add) {
    for (const key in add) {
      state[key] = add[key];
    }
  }

  function removeProps(remove) {
    for (const key of remove) {
      delete state[key];
    }
  }

  function clearAllProps() {
    for (const key in state) {
      delete state[key];
    }
  }

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        addProps(action.extraData);
        break;
      case 'removeProperties':
        removeProps(action.keysToRemove);
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
