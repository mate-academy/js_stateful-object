'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  actions.forEach((action) => {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        action.keysToRemove.forEach((key) => {
          delete state[key];
        });
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  });

  return state;
}

module.exports = transformState;
