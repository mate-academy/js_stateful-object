'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const obj in action.extraData) {
        state[obj] = action.extraData[obj];
      }
    } else if (action.type === 'removeProperties') {
      for (const obj of action.keysToRemove) {
        delete state[obj];
      }
    } else if (action.type === 'clear') {
      for (const obj in state) {
        delete state[obj];
      }
    }
  }

  return state;
}

module.exports = transformState;
