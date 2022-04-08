'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const newState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const key in action.extraData) {
          newState[key] = action.extraData[key];
        }
        break;

      case 'clear':
        for (const key in newState) {
          delete newState[key];
        }
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete newState[key];
        }
        break;
    }
  }
}

module.exports = transformState;
