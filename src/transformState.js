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
      for (const keyRemoved of action.keysToRemove) {
        delete state[keyRemoved];
      }
    } else if (action.type === 'clear') {
      for (const keyCleared in state) {
        delete state[keyCleared];
      }
    } else {
      continue;
    }
  }

  return state;
}

module.exports = transformState;
