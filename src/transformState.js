'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let newState = state;

  for (const action of actions) {
    if (action.type === 'addProperties') {
      newState = Object.assign(newState, action.extraData);
    }

    if (action.type === 'removeProperties') {
      for (const key of Object.values(action.keysToRemove)) {
        delete newState[key];
      }
    }

    if (action.type === 'clear') {
      for (const key in newState) {
        delete newState[key];
      }
    }
  }

  return newState;
}

module.exports = transformState;
