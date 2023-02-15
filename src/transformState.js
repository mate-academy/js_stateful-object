'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const ADD_PROP = 'addProperties';
  const REMOVE_PROP = 'removeProperties';
  const CLEAR = 'clear';

  for (const action of actions) {
    switch (action.type) {
      case ADD_PROP:
        Object.assign(state, action.extraData);
        break;
      case REMOVE_PROP:
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
        throw new Error('Unknown action type');
    }
  }

  return state;
}

module.exports = transformState;
