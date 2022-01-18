'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  actions.forEach(action => {
    const type = action.type;

    if (type === 'addProperties') {
      Object.assign(state, action.extraData);
    } else if (type === 'removeProperties') {
      action.keysToRemove.forEach(key => delete state[key]);
    } else if (type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  });
}

module.exports = transformState;
