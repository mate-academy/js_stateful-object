'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(state, action['extraData']);
    }

    if (action.type === 'removeProperties') {
      for (const removeProp of action['keysToRemove']) {
        delete state[removeProp];
      }
    }

    if (action['type'] === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    }
  }

  return state;
}

module.exports = transformState;
