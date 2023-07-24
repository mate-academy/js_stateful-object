'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type } = action;

    switch (type) {
      case 'addProperties':
        if ('extraData' in action) {
          const { extraData } = action;

          for (const key in extraData) {
            state[key] = extraData[key];
          }
        };
        break;

      case 'removeProperties':
        if ('keysToRemove' in action) {
          const { keysToRemove } = action;

          for (const key of keysToRemove) {
            if (state.hasOwnProperty(key)) {
              delete state[key];
            }
          }
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
