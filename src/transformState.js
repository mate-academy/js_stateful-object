'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'clear') {
      for (const o in state) {
        delete state[o];
      };
    }

    if (action.type === 'removeProperties') {
      for (const i of action.keysToRemove) {
        delete state[i];
      };
    }

    if (action.type === 'addProperties') {
      for (const [key, value] of Object.entries(action.extraData)) {
        state[key] = value;
      }
    }
  }

  return state;
}

module.exports = transformState;
