'use strict';

const ADD = 'addProperties';
const DELETE = 'removeProperties';
const CLEAR = 'clear';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case ADD:
        Object.assign(state, extraData);

        return state;
      case DELETE:
        keysToRemove.forEach(key => {
          delete state[key];
        });

        return state;
      case CLEAR:
        for (const key in state) {
          delete state[key];
        }

        return state;
      default:
        return state;
    }
  });
}

module.exports = transformState;
