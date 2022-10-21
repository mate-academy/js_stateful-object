'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  // Is it OK to create a function inside function or better move it above?
  // Is it OK to create function in this task or better use cycle?
  function deleteAllProperties() {
    for (const key in state) {
      delete state[key];
    }
  }

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case `removeProperties`:
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        // Do i need blank line between cycle and break?
        break;

      case `clear`:
        deleteAllProperties(state);
        break;

      default:
    }
  }

  return state;
}

module.exports = transformState;
