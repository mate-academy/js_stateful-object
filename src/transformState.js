'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  if (actions.length === 0) {
    return state;
  }

  for (const keys of actions) {
    if (keys.type === 'removeProperties') {
      for (const action of keys.keysToRemove) {
        delete state[action];
      }
    } else if (keys.type === 'addProperties') {
      Object.assign(state, keys.extraData);
    } else if (keys.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
