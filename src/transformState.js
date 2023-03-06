'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    } else if (action.type === 'removeProperties') {
      for (const char of action.keysToRemove) {
        delete state[char];
      }
    } else if (action.type === 'clear') {
      for (const char1 in state) {
        delete state[char1];
      }
    }
  }

  return state;
}

module.exports = transformState;
