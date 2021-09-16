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
      for (const i of action.keysToRemove) {
        delete state[i];
      }
    }

    if (action.type === 'clear') {
      for (const i in state) {
        delete state[i];
      }
    }
  }

  return state;
};

module.exports = transformState;
