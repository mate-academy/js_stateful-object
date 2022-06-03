'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }

    if (action.type === 'removeProperties') {
      for (const removeKey of action.keysToRemove) {
        delete state[removeKey];
      }
    }

    if (action.type === 'clear') {
      for (const clearKey in state) {
        delete state[clearKey];
      }
    }
  }

  return state;
}

module.exports = transformState;
