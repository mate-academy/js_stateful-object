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
      for (const item of action.keysToRemove) {
        delete state[item];
      }
    }

    if (action.type === 'clear') {
      for (const item in state) {
        delete state[item];
      }
    }
  }
}

module.exports = transformState;
