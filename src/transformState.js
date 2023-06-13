'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const property in action['extraData']) {
        state[property] = action['extraData'][property];
      }
    }

    if (action.type === 'removeProperties') {
      for (const property of action['keysToRemove']) {
        delete state[property];
      }
    }

    if (action.type === 'clear') {
      Object.keys(state).forEach((key) => delete state[key]);
    }
  }
}

module.exports = transformState;
