'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    if (actions[action].type === 'addProperties') {
      Object.assign(state, actions[action].extraData);
    }

    if (actions[action].type === 'removeProperties') {
      for (const key of actions[action].keysToRemove) {
        delete state[key];
      }
    }

    if (actions[action].type === 'clear') {
      for (const property in state) {
        delete state[property];
      }
    }
  }

  return state;
}

module.exports = transformState;
