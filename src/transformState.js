'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    if (actions[action].type === 'addProperties') {
      Object.assign(state, actions[action].extraData);
    } else if (actions[action].type === 'removeProperties') {
      for (const key of actions[action].keysToRemove) {
        delete state[key];
      }
    } else if (actions[action].type === 'clear') {
      for (const key in state) {
        if (state.hasOwnProperty(key)) {
          delete state[key];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
