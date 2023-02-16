'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
const ADD_ACTION = 'addProperties';
const REMOVE_ACTION = 'removeProperties';
const CLEAR_ACTION = 'clear';

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case ADD_ACTION:
        Object.assign(state, action.extraData);
        break;

      case REMOVE_ACTION:
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;

      case CLEAR_ACTION:
        for (const keyState in state) {
          delete state[keyState];
        }
        break;

      default:
        throw new Error(`Unknown action type ${action.type}`);
    }
  }
}

module.exports = transformState;
