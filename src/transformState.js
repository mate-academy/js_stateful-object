'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const ADD_OPTION = 'addProperties';
  const REMOVE_OPTION = 'removeProperties';
  const CLEAR_OPTION = 'clear';

  for (const action of actions) {
    switch (action.type) {
      case ADD_OPTION:
        Object.assign(state, action.extraData);
        break;
      case REMOVE_OPTION:
        for (const key of action.keysToRemove) {
          delete state[key];
        }

        break;
      case CLEAR_OPTION:
        for (const key of Object.keys(state)) {
          delete state[key];
        }

        break;
      default:
        throw new Error('No defined action type');
    }
  }
}

module.exports = transformState;
