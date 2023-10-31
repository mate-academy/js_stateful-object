'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

const ADD = 'addProperties';
const REMOVE = 'removeProperties';
const CLEAR = 'clear';

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case ADD:
        Object.assign(state, action.extraData);
        break;

      case REMOVE:
        action.keysToRemove.forEach(key => {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        });
        break;

      case CLEAR:
        Object.keys(state).forEach(key => {
          delete state[key];
        });
        break;

      default:
        return 'Unknown action type';
    }
  }

  return state;
}

module.exports = transformState;
