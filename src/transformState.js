'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const elements of actions) {
    switch (elements.type) {
      case 'addProperties':
        for (const key in elements.extraData) {
          state[key] = elements.extraData[key];
        }
        break;

      case 'removeProperties':
        for (const key of elements.keysToRemove) {
          delete state[key];
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
