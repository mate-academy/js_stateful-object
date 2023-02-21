'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  return actions.reduce((initialState, action) => {
    switch (action.type) {
      case 'addProperties':
        return Object.assign(initialState, action.extraData);
      case 'removeProperties':
        action.keysToRemove.forEach(key => delete initialState[key]);

        return initialState;
      case 'clear':
        Object.keys(initialState).forEach(key => delete initialState[key]);

        return initialState;
      default:
        return initialState;
    }
  }, state);
}

module.exports = transformState;
