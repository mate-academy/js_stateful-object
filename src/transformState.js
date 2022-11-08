'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach((action) => {
    switch (action.type) {
      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      default:
        action.keysToRemove.forEach(key => delete state[key]);
    }
  });
}

module.exports = transformState;
