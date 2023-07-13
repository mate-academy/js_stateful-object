'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const actionTypes = {
    addProperties: 'addProperties',
    removeProperties: 'removeProperties',
    clear: 'clear',
  };

  for (const action of actions) {
    switch (action.type) {
      case actionTypes.addProperties:
        Object.assign(state, action.extraData);
        break;

      case actionTypes.removeProperties:
        action.keysToRemove.forEach((key) => delete state[key]);
        break;

      case actionTypes.clear:
        Object.keys(state).forEach((key) => delete state[key]);
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
