'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    if (obj.type === 'clear') {
      for (const stateKey in state) {
        if (stateKey) {
          delete state[stateKey];
        }
      }
    }

    if (obj.type === 'addProperties') {
      Object.assign(state, obj.extraData);
    }

    if (obj.type === 'removeProperties') {
      for (const keyToRemove of obj.keysToRemove) {
        delete state[keyToRemove];
      }
    }
  }

  return state;
}

module.exports = transformState;
