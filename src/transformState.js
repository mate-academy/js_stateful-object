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
      for (const value of action.keysToRemove) {
        delete state[value];
      }
    }

    if (action.type === 'clear') {
      for (const removeKey in state) {
        delete state[removeKey];
      }
    }
  }

  return state;
}

module.exports = transformState;
