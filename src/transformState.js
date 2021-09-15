'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    if (action['type'] === 'addProperties') {
      for (const key in action['extraData']) {
        state[key] = action['extraData'][key];
      }
    }

    if (action['type'] === 'removeProperties') {
      for (const rem of action.keysToRemove) {
        delete state[rem];
      }
    }

    if (action['type'] === 'clear') {
      for (const key in state) {
        if (state.hasOwnProperty(key)) {
          delete state[key];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
