'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const newState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.keys(action.extraData).forEach((key) => {
          newState[key] = action.extraData[key];
        });
        break;

      case 'removeProperties':
        action.keysToRemove.forEach((key) => {
          delete newState[key];
        });
        break;

      case 'clear':
        Object.keys(newState).forEach((key) => {
          delete newState[key];
        });
        break;

      default:
        throw new Error('Unknwon action!');
    }
  }

  return newState;
}

module.exports = transformState;
