'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach((action) => {
    if (action.type === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    } else {
      if (action.type === 'addProperties') {
        state = Object.assign(state, action.extraData);
      } else {
        action.keysToRemove.forEach(key => delete state[key]);
      }
    }
  });
}

module.exports = transformState;
