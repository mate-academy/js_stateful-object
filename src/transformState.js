'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const index in actions) {
    const action = actions[index];

    if (action.type === 'addProperties') {
      for (const newKey in action.extraData) {
        state[newKey] = action.extraData[newKey];
      }
    }

    if (action.type === 'removeProperties') {
      for (const keyToRemoveIndex in action.keysToRemove) {
        delete state[action.keysToRemove[keyToRemoveIndex]];
      }
    }

    if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
