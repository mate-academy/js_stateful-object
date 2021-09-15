'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const x of actions) {
    if (x.type === 'addProperties') {
      Object.assign(state, x.extraData);
    }

    if (x.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (x.type === 'removeProperties') {
      for (const key of x.keysToRemove) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
