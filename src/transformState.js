'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        const propsToAdd = Object.entries(action.extraData);

        for (const [key, value] of propsToAdd) {
          state[key] = value;
        }
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
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
