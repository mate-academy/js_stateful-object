'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
const ADD_PROPERTIES = 'addProperties';
const REMOVE_PROPERTIES = 'removeProperties';
const CLEAR_PROPERTIES = 'clear';

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case ADD_PROPERTIES:
        Object.assign(state, action.extraData);

        break;
      case REMOVE_PROPERTIES:
        action.keysToRemove.every(value => delete state[value]);

        break;
      case CLEAR_PROPERTIES:
        Object.keys(state).forEach(value => delete state[value]);

        break;
      default:
        throw new Error(`Unknown action type: "${action.type}"`);
    }
  }

  return state;
}

module.exports = transformState;
