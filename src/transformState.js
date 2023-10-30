'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

const add = 'addProperties';
const remove = 'removeProperties';
const clear = 'clear';

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case add:
        for (const key in action.extraData) {
          state[key] = action.extraData[key];
        }
        break;

      case remove:
        for (const key of action.keysToRemove) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;

      case clear:
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        return 'Unknown action type';
    }
  }

  return state;
}

module.exports = transformState;
