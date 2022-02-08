'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const elem of actions) {
    if (elem.type === 'addProperties') {
      for (const keys in elem.extraData) {
        state[keys] = elem.extraData[keys];
      }
    }

    if (elem.type === 'removeProperties') {
      for (const elem1 of elem.keysToRemove) {
        delete state[elem1];
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
