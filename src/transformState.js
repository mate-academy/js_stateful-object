'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      const propsToAdd = Object.entries(action.extraData);

      for (const [key, value] of propsToAdd) {
        state[key] = value;
      }
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete state[key];
      }
    }

    if (action.type === 'clear') {
      const stateKeys = Object.keys(state);

      for (const key of stateKeys) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
