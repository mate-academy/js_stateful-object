'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const elem of actions) {
    if (elem.type === 'addProperties') {
      for (const key in elem.extraData) {
        state[key] = elem.extraData[key];
      }
    }

    if (elem.type === 'removeProperties') {
      for (const index of elem.keysToRemove) {
        delete state[index];
      }
    }

    if (elem.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
