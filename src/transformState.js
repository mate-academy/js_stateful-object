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
        for (const key in extraData) {
          state[key] = extraData[key];
        }
        break;

      case 'removeProperties':
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        throw new Error(`type in array 'actions' is not found`);
    }
  }
}
module.exports = transformState;
