'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const i of actions) {
    if (i.type === 'addProperties') {
      Object.assign(state, ...[i.extraData]);
    } else if (i.type === 'removeProperties') {
      for (const j of i.keysToRemove) {
        delete state[j];
      }
    } else if (i.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
