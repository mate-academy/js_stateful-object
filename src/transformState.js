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
    }

    if (action.type === 'removeProperties') {
      for (const j of action.keysToRemove) {
        delete state[j];
      }
    }

    if (action.type === 'clear') {
      for (const x in state) {
        delete state[x];
      }
    }
  }
}

module.exports = transformState;
