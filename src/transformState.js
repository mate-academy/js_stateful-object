'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const [key, value] of Object.entries(action.extraData)) {
        state[key] = value;
      }
    }

    if (action.type === 'removeProperties') {
      for (const keyToRemove of action.keysToRemove) {
        delete state[keyToRemove];
      }
    }

    if (action.type === 'clear') {
      for (const stat in state) {
        delete state[stat];
      }
    }
  }
}

module.exports = transformState;
