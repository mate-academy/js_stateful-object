'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const newState = state;

  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const key in action.extraData) {
        newState[key] = action.extraData[key];
      }
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete newState[key];
      }
    }

    if (action.type === 'clear') {
      for (const key in newState) {
        delete newState[key];
      }
    }
  }
}

module.exports = transformState;
