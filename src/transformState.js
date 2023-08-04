'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  actions.forEach((action) => {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'clear':
        Object.keys(state).forEach((key) => delete state[key]);
        break;

      case 'removeProperties':
        action.keysToRemove.forEach((key) => {
          delete state[key];
        });
        break;

      default:
        break;
    }
  });
}

module.exports = transformState;
