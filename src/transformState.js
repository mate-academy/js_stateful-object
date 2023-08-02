'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach((action) => {
    switch (action.type) {
      case 'clear':
        Object.keys(state).forEach((key) => delete state[key]);
        break;

      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        action.keysToRemove.forEach((property) => {
          delete state[property];
        });
        break;

      default:
        throw new Error('Unexpected error');
    }
  });
}

module.exports = transformState;
