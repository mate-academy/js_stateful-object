'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const transform of actions) {
    if (transform.type === 'addProperties') {
      Object.assign(state, transform.extraData);
    }

    if (transform.type === 'removeProperties') {
      for (const keyToRemove of transform.keysToRemove) {
        delete state[keyToRemove];
      }
    }

    if (transform.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
