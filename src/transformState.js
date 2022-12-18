'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const transformedState = state;

  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(transformedState, action.extraData);
    } else if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete transformedState[key];
      }
    } else if (action.type === 'clear') {
      for (const key in transformedState) {
        delete transformedState[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
