'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const act of actions) {
    if (act.type === 'addProperties') {
      Object.assign(state, act.extraData);
    }

    if (act.type === 'removeProperties') {
      for (const i of act.keysToRemove) {
        delete state[i];
      }
    }

    if (act.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
