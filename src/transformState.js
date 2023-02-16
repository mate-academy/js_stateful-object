'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const ActionType = {
    AddProperties: 'addProperties',
    RemoveProperties: 'removeProperties',
    Clear: 'clear',
  };

  for (const action of actions) {
    switch (action.type) {
      case ActionType.AddProperties:
        Object.assign(state, action.extraData);
        break;
      case ActionType.RemoveProperties:
        for (const key of action.keysToRemove) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;
      case ActionType.Clear:
        for (const key in state) {
          delete state[key];
        }
        break;
      default:
        throw new Error(`Unknown action type: "${action.type}"`);
    }
  }

  return state;
}

module.exports = transformState;
