'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const { type, extraData, keysToRemove } of actions) {
    if (type === 'addProperties') {
      const propForAdd = Object.entries(extraData);

      for (const [key, value] of propForAdd) {
        state[key] = value;
      }
    }

    if (type === 'removeProperties') {
      for (const propForRemove of keysToRemove) {
        if (state.hasOwnProperty(propForRemove)) {
          delete state[propForRemove];
        }
      }
    }

    if (type === 'clear') {
      for (const element in state) {
        delete state[element];
      }
    }
  }

  return state;
}

module.exports = transformState;
