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
      for (const elementForRemove of action.keysToRemove) {
        delete state[elementForRemove];
      }
    }

    if (action.type === 'clear') {
      for (const clear in state) {
        delete state[clear];
      }
    }
  }

  return state;
}

module.exports = transformState;
