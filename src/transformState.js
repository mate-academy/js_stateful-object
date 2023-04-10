'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case 'removeProperties':
        action.keysToRemove.forEach(k => {
          if (state.hasOwnProperty(k)) {
            delete state[k];
          }
        });
        break;
      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;
      default:
        return false;
    }
  });
}

module.exports = transformState;
