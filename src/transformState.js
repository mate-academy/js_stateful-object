'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);

      continue;
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete state[key];
      }

      continue;
    }

    if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }

      continue;
    }
  }
}

module.exports = transformState;
