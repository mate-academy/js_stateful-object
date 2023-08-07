'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    const { type } = action;

    switch (type) {
      case 'addProperties':
        const { extraData } = action;

        for (const key in extraData) {
          state[key] = extraData[key];
        }
        break;

      case 'removeProperties':
        const { keysToRemove } = action;

        if (keysToRemove) {
          for (const key of keysToRemove) {
            delete state[key];
          }
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        throw new Error(`Unknown action type: ${type}`);
    }
  }
}

module.exports = transformState;
