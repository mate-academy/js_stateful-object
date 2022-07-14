'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const property of actions) {
    if (property.type === 'addProperties') {
      for (const key in property.extraData) {
        state[key] = property.extraData[key];
      }
    }

    if (property.type === 'removeProperties') {
      for (const keyremove of property.keysToRemove) {
        if (keyremove in state) {
          delete state[keyremove];
        }
      }
    }

    if (property.type === 'clear') {
      for (const keyclear in state) {
        delete state[keyclear];
      }
    }
  }

  return state;
}

module.exports = transformState;
