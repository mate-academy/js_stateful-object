'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i of actions) {
    if (i.type === 'addProperties') {
      for (const key in i.extraData) {
        state[key] = i.extraData[key];
      }
    }

    if (i.type === 'removeProperties') {
      for (const key of i.keysToRemove) {
        delete state[key];
      }
    }

    if (i.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
