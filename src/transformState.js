'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const ActionTypes = {};

  actions.map(action => {
    ActionTypes[action.type] = action.type;
  });

  for (const action of actions) {
    switch (action.type) {
      case ActionTypes.addProperties:
        for (const data in action.extraData) {
          state[data] = action.extraData[data];
        };

        break;

      case ActionTypes.removeProperties:
        for (const prop of action.keysToRemove) {
          delete state[prop];
        };

        break;

      case ActionTypes.clear:
        Object.keys(state).forEach(key => delete state[key]);

        break;
    }
  }
}

module.exports = transformState;
