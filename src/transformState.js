'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  // write code here
  actions.forEach(item => {
    switch (item.type) {
      case `addProperties`:
        Object.assign(state, item.extraData);
        break;

      case `removeProperties`:
        item.keysToRemove.forEach(key => {
          delete state[key];
        });
        break;

      case `clear`:
        Object.keys(state).forEach(key => {
          delete state[key];
        });
        break;

      default:
        break;
    }
  });
}

module.exports = transformState;
