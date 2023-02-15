'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
const ADD_ACTION = 'addProperties';
const REMOVE_ACTION = 'removeProperties';
const CLEAR_ACTION = 'clear';

function transformState(state, actions) {
  // write code here
  let newState = state;

  for (const action of actions) {
    switch (action.type) {
      case ADD_ACTION:
        newState = Object.assign(state, action.extraData);
        break;

      case REMOVE_ACTION:
        for (const key of action.keysToRemove) {
          delete newState[key];
        }
        break;

      case CLEAR_ACTION:
        for (const key in newState) {
          delete [key];
          delete newState[key];
        }
        break;

      default:
        throw new Error(`Unknown action type ${action.type}`);
    }
  }

  return newState;
}

module.exports = transformState;
