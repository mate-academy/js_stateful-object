'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type } = action;

    switch (action.type) {
      case 'addProperties':
        const { extraData } = action;

        for (const [key, value] of Object.entries(extraData)) {
          state[key] = value;
        }
        break;

      case 'removeProperties':
        const { keysToRemove } = action;

        for (const key of keysToRemove) {
          if (state.hasOwnProperty(key)) {
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
        throw new Error(`Invalid action: ${type}`);
    }
  }
}

module.exports = transformState;
