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

  for (let i = 0; i < actions.length; i++) {
    const { type, extraData, keysToRemove } = actions[i];

    switch (type) {
      case ActionType.AddProperties:
        Object.assign(state, extraData);
        break;

      case ActionType.RemoveProperties:
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;

      case ActionType.Clear:
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        return state;
    }
  }

  return state;
}

module.exports = transformState;
