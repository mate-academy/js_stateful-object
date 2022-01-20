'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const action = Object.values(actions);

  for (const key of action) {
    switch (key.type) {
      case 'addProperties':
        for (const property in key.extraData) {
          state[property] = key.extraData[property];
        }
        break;

      case 'removeProperties':
        for (const property of key.keysToRemove) {
          delete state[property];
        }
        break;

      case 'clear':
        for (const property in state) {
          delete state[property];
        }
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
