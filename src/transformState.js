'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const modifiedState = state;

  actions.forEach(action => {
    if (action.type === 'addProperties') {
      Object.assign(modifiedState, action.extraData);
    } else if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete modifiedState[key];
      }
    } else if (action.type === 'clear') {
      for (const key in modifiedState) {
        delete modifiedState[key];
      }
    }
  });
}

module.exports = transformState;
