'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
const actionTypes = {
  addProperties: 'addProperties',
  removeProperties: 'removeProperties',
  clear: 'clear',
};

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case actionTypes.addProperties:
        Object.assign(state, action.extraData);
        break;

      case actionTypes.removeProperties:
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;
      case actionTypes.clear:
        for (const key in state) {
          delete state[key];
        };
        break;
    };
  };

  return state;
};
module.exports = transformState;
