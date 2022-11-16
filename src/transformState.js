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
      action.keysToRemove.forEach(remove => {
        for (const value in state) {
          if (value === remove) {
            delete state[value];
          }
        }
      });
    } else if (action.type === 'clear') {
      for (const value in state) {
        delete state[value];
      }
    }
  });

  return state;
}

module.exports = transformState;
