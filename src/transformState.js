'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    } else if (action.type === 'removeProperties') {
      action.keysToRemove.forEach(i => delete state[i]);
    } else {
      Object.keys(state).forEach(key => delete state[key]);
    }
  }
}

module.exports = transformState;
