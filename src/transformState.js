'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }

    if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (action.type === 'removeProperties') {
      for (const keyForState of action.keysToRemove) {
        if (state[keyForState]) {
          delete state[keyForState];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
