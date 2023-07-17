'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const actionTypes = {
    AddProperties: 'addProperties',
    RemoveProperties: 'removeProperties',
    Clear: 'clear',
  };

  for (const action of actions) {
    switch (action.type) {
      case actionTypes.AddProperties:
        Object.assign(state, action.extraData);
        break;

      case actionTypes.RemoveProperties:
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;

      case actionTypes.Clear:
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
