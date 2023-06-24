'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    const { type } = action;

    switch (type) {
      case 'addProperties':
        const { extraData } = action;

        Object.entries(extraData).forEach(([key, value]) => {
          state[key] = value;
        });
        break;

      case 'removeProperties':
        const { keysToRemove } = action;

        keysToRemove.forEach(key => {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        });
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:

        break;
    }
  });
}

module.exports = transformState;
