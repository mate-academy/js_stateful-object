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
      for (const key of act.keysToRemove) {
        delete state[key];
      }
    }

    if (act.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
