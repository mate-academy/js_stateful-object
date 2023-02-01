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
      for (const type of action.keysToRemove) {
        delete state[type];
      }
    }

    if (action.type === 'clear') {
      for (const type in state) {
        delete state[type];
      }
    }
  }
}

module.exports = transformState;
