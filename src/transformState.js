'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const iterator of actions) {
    if (iterator.type === 'addProperties') {
      for (const key in iterator.extraData) {
        state[key] = iterator.extraData[key];
      }
    }

    if (iterator.type === 'removeProperties') {
      for (let i = 0; i <= iterator.keysToRemove.length - 1; i++) {
        delete state[iterator.keysToRemove[i]];
      }
    }

    if (iterator.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
