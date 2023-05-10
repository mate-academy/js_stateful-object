'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const actionType = action.type;

    if (actionType === 'removeProperties') {
      const keysToRemove = action.keysToRemove;

      for (const key of keysToRemove) {
        delete state[key];
      }
    }

    if (actionType === 'addProperties') {
      const dataToAdd = action.extraData;

      for (const key in dataToAdd) {
        state[key] = dataToAdd[key];
      }
    }

    if (actionType === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
