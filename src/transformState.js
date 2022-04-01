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
      for (let i = 0; i < key.keysToRemove.length; i++) {
        delete state[key.keysToRemove[i]];
      }
    } else if (key.type === 'clear') {
      for (const forDelete in state) {
        delete state[forDelete];
      }
    }
  }

  return state;
}

module.exports = transformState;
