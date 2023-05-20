'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    if (actions[action]['type'] === 'addProperties') {
      Object.assign(state, actions[action].extraData);
    }

    if (actions[action]['type'] === 'removeProperties') {
      for (const del of actions[action].keysToRemove) {
        delete state[del];
      }
    }

    if (actions[action]['type'] === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
