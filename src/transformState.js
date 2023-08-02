'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const addProperty in action.extraData) {
        state[addProperty] = action.extraData[addProperty];
      }
    } else if (action.type === 'removeProperties') {
      for (const removeProperty of action.keysToRemove) {
        delete state[removeProperty];
      }
    } else if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
