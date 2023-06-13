'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const ADD_ACTION = 'addProperties';
  const REMOVE_ACTION = 'removeProperties';
  const CLEAR_ACTION = 'clear';

  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case ADD_ACTION:
        Object.assign(state, extraData);
        break;

      case REMOVE_ACTION:
        keysToRemove.forEach(key => {
          delete state[key];
        });
        break;

      case CLEAR_ACTION:
        Object.keys(state).forEach(key => {
          delete state[key];
        });
        break;

      default:
        throw new Error(`Action error with ${type}`);
    }
  }
}

module.exports = transformState;
