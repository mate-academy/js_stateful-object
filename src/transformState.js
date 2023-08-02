'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const ACTION_ADD = 'addProperties';
  const ACTION_REMOVE = 'removeProperties';
  const ACTION_CLEAR = 'clear';
  const ERROR_MSG = 'Unknown action!';

  for (const action of actions) {
    switch (action.type) {
      case ACTION_ADD:
        Object.assign(state, action.extraData);
        break;

      case ACTION_REMOVE:
        action.keysToRemove.forEach(key => delete state[key]);
        break;

      case ACTION_CLEAR:
        Object.keys(state).forEach(key => delete state[key]);
        break;

      default:
        throw new Error(ERROR_MSG);
    }
  }
}

module.exports = transformState;
