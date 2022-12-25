'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const transformedState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(transformedState, action.extraData);
        break;
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete transformedState[key];
        };
        break;
      case 'clear':
        for (const key in transformedState) {
          delete transformedState[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
