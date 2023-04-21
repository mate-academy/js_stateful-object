'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const ADD_PROPERTIES_TYPE = 'addProperties';
  const REMOVE_PROPERTIES_TYPE = 'removeProperties';
  const CLEAR_PROPERTIES_TYPE = 'clear';

  for (const action of actions) {
    switch (action.type) {
      case ADD_PROPERTIES_TYPE:
        Object.assign(state, action.extraData);
        break;
      case REMOVE_PROPERTIES_TYPE:
        action.keysToRemove.forEach(key => delete state[key]);
        break;
      case CLEAR_PROPERTIES_TYPE:
        Object.keys(state).forEach(key => delete state[key]);
        break;
      default:
        break;
    }
  }
}

module.exports = transformState;
