'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const properties of actions) {
    if (properties.type === 'addProperties') {
      Object.assign(state, properties.extraData);
    }

    if (properties.type === 'removeProperties') {
      for (const removeKey of properties.keysToRemove) {
        delete state[removeKey];
      }
    }

    if (properties.type === 'clear') {
      for (const clear in state) {
        delete state[clear];
      }
    }
  }

  return state;
}

module.exports = transformState;
