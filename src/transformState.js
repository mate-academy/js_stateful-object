'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'addProperties':
        for (const data in extraData) {
          state[data] = extraData[data];
        }
        break;

      case 'removeProperties':
        for (const keyToRemove of keysToRemove) {
          delete state[keyToRemove];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
