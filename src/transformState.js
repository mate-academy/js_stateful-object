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
        Object.assign(state, extraData);
        break;

      case 'removeProperties': {
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;
      }

      case 'clear':
        for (const value in state) {
          delete state[value];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
