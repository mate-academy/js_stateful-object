'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    const { type } = key;
    const { extraData } = key;
    const { keysToRemove } = key;

    if (type === 'addProperties') {
      Object.assign(state, extraData);
    }

    if (type === 'removeProperties') {
      for (const property in state) {
        for (const value of keysToRemove) {
          if (property === value) {
            delete state[property];
          }
        }
      }
    }

    if (type === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    }
  }

  return state;
}

module.exports = transformState;
