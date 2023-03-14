'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const transformedState = state;

  actions.forEach(action => {
    switch (action.type) {
      case 'addProperties':
        for (const key in action.extraData) {
          transformedState[key] = action.extraData[key];
        }
        break;

      case 'removeProperties':
        action.keysToRemove.forEach(key => delete transformedState[key]);
        break;

      case 'clear':
        for (const key in transformedState) {
          delete transformedState[key];
        }
        break;

      default:
        throw new Error('Something went wrong!');
    }
  });
}

module.exports = transformState;
