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

    if (objActions.type === ADD) {
      for (const key in objActions.extraData) {
        state[key] = objActions.extraData[key];
      }
    } else if (objActions.type === REMOVE) {
      for (const key of objActions.keysToRemove) {
        delete state[key];
      }
    } else if (objActions.type === REMOVE_ALL) {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
