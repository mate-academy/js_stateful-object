'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    if (key['type'] === 'addProperties') {
      Object.assign(state, key['extraData']);
    }

    if (key['type'] === 'removeProperties') {
      const a = key['keysToRemove'];

      for (const value of a) {
        delete state[value];
      }
    }

    if (key['type'] === 'clear') {
      for (const value in state) {
        delete state[value];
      }
    }
  }

  return state;
}

module.exports = transformState;
