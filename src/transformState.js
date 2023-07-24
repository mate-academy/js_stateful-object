'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const ActionTypes = {
    addProperties: 'addProperties',
    removeProperties: 'removeProperties',
    clear: 'clear',
  };

  for (const action of actions) {
    switch (action.type) {
      case ActionTypes.addProperties:
        Object.assign(state, action.extraData);

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
