'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;
    const ActionType = {
      AddProperties: 'addProperties',
      RemoveProperties: 'removeProperties',
      Clear: 'clear',
    };

    switch (type) {
      case ActionType.AddProperties:
        Object.assign(state, extraData);
        break;
      case ActionType.RemoveProperties:
        for (const key of keysToRemove) {
          if (key in state) {
            delete state[key];
          }
        }
        break;
      case ActionType.Clear:
        const keys = Object.keys(state);

        for (const key of keys) {
          delete state[key];
        }
        break;
      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
