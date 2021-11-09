'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    if (key.type === 'addProperties') {
      for (const add in key.extraData) {
        state[add] = key.extraData[add];
      }
    }

    if (key.type === 'clear') {
      for (const del in state) {
        delete state[del];
      }
    }

    if (key.type === 'removeProperties') {
      for (const remove of key.keysToRemove) {
        delete state[remove];
      }
    }
  }

  return state;
}

module.exports = transformState;
