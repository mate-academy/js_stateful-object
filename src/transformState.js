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
      for (const keys of action.keysToRemove) {
        delete state[keys];
      }
    } else {
      Object.keys(state).forEach(n => delete state[n]);
    }
  }

  return state;
}

module.exports = transformState;
