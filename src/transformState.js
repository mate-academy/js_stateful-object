'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const actionHandlers = {
    addProperties: (action) => {
      const { extraData } = action;

      Object.assign(state, extraData);
    },
    removeProperties: (action) => {
      const { keysToRemove } = action;

      for (const key of keysToRemove) {
        delete state[key];
      }
    },
    clear: () => {
      for (const key in state) {
        delete state[key];
      }
    },
  };

  for (const action of actions) {
    const handler = actionHandlers[action.type];

    if (handler) {
      handler(action);
    }
  }
}
module.exports = transformState;
