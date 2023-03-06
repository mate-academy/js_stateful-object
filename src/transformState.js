'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  actions.forEach(action => {
    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    } else if (action.type === 'removeProperties') {
      action.keysToRemove.forEach(key => {
        if (key in state) {
          delete state[key];
        }
      });
    } else if (action.type === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    }
  });

}

module.exports = transformState;
