'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
const ACTIONTYPES = {
  AddProperties: 'addProperties',
  RemoveProperties: 'removeProperties',
  Clear: 'clear',
};

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case ACTIONTYPES.AddProperties:
        Object.assign(state, action.extraData);
        break;

      case ACTIONTYPES.RemoveProperties:
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;
      case ACTIONTYPES.Clear:
        for (const key in state) {
          delete state[key];
        };
        break;
    };
  };

  return state;
};
module.exports = transformState;
