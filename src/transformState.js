'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let newState = state;

  actions.forEach((action) => {
    switch (action.type) {
      case 'addProperties':
        newState = {
          ...state,
          ...action.extraData,
        };
        break;

      case 'removeProperties':
        action.keysToRemove.forEach((key) => delete newState[key]);
        break;

      case 'clear':
        Object.keys(newState).forEach((key) => delete newState[key]);
        break;

      default:
        throw new Error('Unknown action type: ' + action.type);
    }

    return newState;
  });
}

module.exports = transformState;
