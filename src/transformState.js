'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { keysToRemove, extraData, type } = action;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        for (const key of keysToRemove) {
          delete state[key];
        };
        break;

      case 'clear':
        for (const key in state) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;
      default:
        throw new Error("I'm Error");
    }
  }
}

module.exports = transformState;
