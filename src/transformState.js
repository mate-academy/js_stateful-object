'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const ADD_PROPERTIES = 'addProperties';
  const REMOVE_PROPERTIES = 'removeProperties';
  const CLEAR_PROPERTIES = 'clear';

  for (const action of actions) {
    if (action.type === ADD_PROPERTIES) {
      Object.assign(state, action.extraData);
    }

    if (action.type === REMOVE_PROPERTIES) {
      for (const remove of action.keysToRemove) {
        if (state.hasOwnProperty(remove)) {
          delete state[remove];
        }
      }
    }

    if (action.type === CLEAR_PROPERTIES) {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
