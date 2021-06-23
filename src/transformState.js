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
      for (const removeKeys of action.keysToRemove) {
        delete state[removeKeys];
      }
    }

    if (action.type === 'clear') {
      for (const stateProperty in state) {
        delete state[stateProperty];
      }
    }
  }

  return state;
}

module.exports = transformState;
