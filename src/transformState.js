'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
const ACTIONTYPES = {
  addProperties: 'AddProperties',
  removeProperties: 'RemoveProperties',
  clear: 'Clear',
};

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case ACTIONTYPES.addProperties:
        Object.assign(state, action.extraData);
        break;

      case ACTIONTYPES.removeProperties:
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;
      case ACTIONTYPES.clear:
        for (const key in state) {
          delete state[key];
        };
        break;
    };
  };

  return state;
};
module.exports = transformState;
