'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'clear') {
      for (const key of Object.keys(state)) {
        delete state[key];
      }
    } else if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        if (state[key]) {
          delete state[key];
        }
      }
    } else if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }
  }

  return state;
}

module.exports = transformState;
