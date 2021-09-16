'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.keys(action.extraData)
          .forEach(key => (state[key] = action.extraData[key]));
        break;
      case 'removeProperties':
        for (const keyToDelete of action.keysToRemove) {
          delete state[keyToDelete];
        }
        break;
      case 'clear':
        Object.keys(state).forEach(key => (delete state[key]));
        break;
    }
  }
}

module.exports = transformState;
