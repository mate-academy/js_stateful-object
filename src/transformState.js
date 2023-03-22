'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const newState = state;

  for (const action of actions) {
    const addKey = Object.assign(state, action.extraData);

    for (const key in action.keysToRemove) {
      delete addKey[action.keysToRemove[key]];
    }

    if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return newState;
}

module.exports = transformState;
