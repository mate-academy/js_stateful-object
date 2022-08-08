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
        const propsToAdd = Object.entries(extraData);

        for (const [key, value] of propsToAdd) {
          state[key] = value;
        }
        break;

      case 'removeProperties':
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        const stateKeys = Object.keys(state);

        for (const key of stateKeys) {
          delete state[key];
        }
        break;

      default:
        return -1;
    }
  }
}

module.exports = transformState;
