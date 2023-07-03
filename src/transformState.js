'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const REMOVE_ALL = 'clear';
  const ADD = 'addProperties';
  const REMOVE = 'removeProperties';

  for (let i = 0; i < actions.length; i++) {
    const objActions = actions[i];

    switch (objActions.type) {
      case ADD:
        for (const key in objActions.extraData) {
          state[key] = objActions.extraData[key];
        }
        break;

      case REMOVE:
        for (const key of objActions.keysToRemove) {
          delete state[key];
        }
        break;

      case REMOVE_ALL:
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
