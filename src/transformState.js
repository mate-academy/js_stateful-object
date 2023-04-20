'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const actionHandlers = {
    addProperties: (action) => Object.assign(state, action.extraData),
    removeProperties: (action) => {
      for (const key of action.keysToRemove) {
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
    } else {
      throw new Error(`Invalid action type: ${action.type}`);
    }
  }
}

module.exports = transformState;
