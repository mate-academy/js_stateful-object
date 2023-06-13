'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const ADD_PROPERTY_TYPE = 'addProperties';
  const REMOVE_PROPERTY_TYPE = 'removeProperties';
  const CLEAR_TYPE = 'clear';

  for (const action of actions) {
    switch (action.type) {
      case ADD_PROPERTY_TYPE:
        Object.assign(state, action.extraData);

        break;

      case REMOVE_PROPERTY_TYPE:
        for (const key of action.keysToRemove) {
          delete state[key];
        }

        break;

      case CLEAR_TYPE:
        for (const key in state) {
          delete state[key];
        }

        break;

      default:
        throw new Error('Incorrect action type');
    }
  }
}

module.exports = transformState;
