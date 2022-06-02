'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    if (key.type === 'addProperties') {
      for (const prop in key.extraData) {
        state[prop] = key.extraData[prop];
      }
    }

    if (key.type === 'removeProperties') {
      for (const delKey of key.keysToRemove) {
        delete state[delKey];
      }
    }

    if (key.type === 'clear') {
      for (const props in state) {
        delete state[props];
      }
    }
  }

  return state;
}

module.exports = transformState;
