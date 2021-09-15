'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.keys(action.extraData)
        .forEach(key => (state[key] = action.extraData[key]));
    } else if (action.type === 'removeProperties') {
      for (const keyToDelete of action.keysToRemove) {
        delete state[keyToDelete];
      }
    } else if (action.type === 'clear') {
      Object.keys(state).forEach(key => (delete state[key]));
    }
  }
}

module.exports = transformState;
