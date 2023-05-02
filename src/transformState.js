'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    if (actions[key].type === 'addProperties') {
      Object.assign(state, actions[key].extraData);
    }

    if (actions[key].type === 'removeProperties') {
      for (const del of actions[key].keysToRemove) {
        delete state[del];
      }
    }

    if (actions[key].type === 'clear') {
      for (const k in state) {
        delete state[k];
      }
    }
  }

  return state;
}

module.exports = transformState;
