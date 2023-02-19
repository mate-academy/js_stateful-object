'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    if (action['type'] === 'addProperties') {
      Object.keys(action['extraData']).forEach(key => {
        state[key] = action['extraData'][key];
      });
    }

    if (action['type'] === 'removeProperties') {
      action['keysToRemove'].forEach(key => {
        delete state[key];
      });
    }

    if (action['type'] === 'clear') {
      Object.keys(state).forEach(key => {
        delete state[key];
      });
    }
  }
}

module.exports = transformState;
