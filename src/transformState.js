'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const ADD = 'addProperties';
  const REMOVE = 'removeProperties';
  const CLEAR = 'clear';

  for (const action of actions) {
    switch (action.type) {
      case ADD:
        Object.assign(state, action.extraData);
        break;

      case REMOVE:
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
        throw new Error('Wrong type');
    }
  }
}

module.exports = transformState;
