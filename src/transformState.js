'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  actions.forEach(action => {
    if (action['type'] === 'addProperties') {
      Object.assign(state, action['extraData']);
    }

    if (action['type'] === 'removeProperties') {
      action['keysToRemove'].forEach(item => {
        if (state[item]) {
          delete state[item];
        }
      });
    }

    if (action['type'] === 'clear') {
      for (const key in state) {
        delete state[key];
      };
    }
  });
}

module.exports = transformState;
