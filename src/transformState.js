'use strict';

const ACTION_ADD_PROPERTIES = 'addProperties';
const REMOVE_PROPERTIES = 'removeProperties';
const CLEAR = 'clear';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case ACTION_ADD_PROPERTIES:
        Object.assign(state, action.extraData);
        break;

      case REMOVE_PROPERTIES:
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;

      case CLEAR:
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  }

  return state;
}

module.exports = transformState;
