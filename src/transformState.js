'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  
actions.forEach((action) => {
    switch (action.type) {
      case 'addProperties':
        const extraData = action.extraData;
        Object.keys(extraData).forEach((key) => {
          state[key] = extraData[key];
        });
        break;
      case 'removeProperties':
        const keysToRemove = action.keysToRemove;
        keysToRemove.forEach((key) => {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        });
        break;
      case 'clear':
        Object.keys(state).forEach((key) => {
          delete state[key];
        });
        break;
      default:
        break;
    }
  });
}

module.exports = transformState;
