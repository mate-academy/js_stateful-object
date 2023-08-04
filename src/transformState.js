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
        const extraData = action.extraData;

        Object.assign(state, extraData);

        continue;

      case REMOVE:
        const keysToRemove = action.keysToRemove;

        for (const key of keysToRemove) {
          delete state[key];
        }

        continue;

      case CLEAR:
        for (const key in state) {
          delete state[key];
        }

        continue;

      default:
        return state;
    }
  }
}

module.exports = transformState;
