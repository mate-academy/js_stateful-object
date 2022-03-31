'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  actions.forEach((action) => {
    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }

    if (action.type === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    }

    if (action.type === 'removeProperties') {
      action.keysToRemove.forEach((prop) => {
        delete state[prop];
      });
    }
  });
}

module.exports = transformState;
