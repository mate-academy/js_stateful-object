'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    if (key.type === 'addProperties') {
      Object.assign(state, key.extraData);
    } else if (key.type === 'removeProperties') {
      for (const i of key.keysToRemove) {
        delete state[i];
      }
    } else if (key.type === 'clear') {
      for (const x in state) {
        delete state[x];
      }
    }
  }

  return state;
}
module.exports = transformState;
