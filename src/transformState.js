"use strict";

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
      continue;
    }

    if (action.type === 'removeProperties') {
      for (const keyToRemove of action.keysToRemove) {
        delete state[keyToRemove];
      }
      continue;
    }

    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }
  }
}

module.exports = transformState;
