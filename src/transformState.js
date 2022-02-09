'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case 'removeProperties':
        const rem = action.keysToRemove;

        for (const char of rem) {
          delete state[char];
        }
        break;

      default:
        for (const key in state) {
          delete state[key];
        }
    }
  }
}

module.exports = transformState;
