'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'clear') {
      const stateKeys = Object.keys(state);

      for (const key of stateKeys) {
        delete state[key];
      }
    } else if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete state[key];
      }
    } else if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }
  }
}

module.exports = transformState;
