'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const types of actions) {
    switch (true) {
      case types.type === 'addProperties':
        for (const addKey in types.extraData) {
          state[`${addKey}`] = types.extraData[`${addKey}`];
        }
        break;

      case types.type === 'removeProperties':
        for (const removeKey of types.keysToRemove) {
          delete state[`${removeKey}`];
        }
        break;

      case types.type === 'clear':
        for (const clearKey in state) {
          delete state[`${clearKey}`];
        }
        break;
      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
