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
        continue;
      case `removeProperties`:
        for (let i = 0; i < action.keysToRemove.length; i++) {
          delete state[action.keysToRemove[i]];
        }
        continue;
      case `clear`:
        deleteAllProperties(state);
        continue;
      default:
    }
  }

  return state;
}

module.exports = transformState;
