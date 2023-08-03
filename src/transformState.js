'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case ('addProperties'):
        const extraData = action.extraData;

        for (const key in extraData) {
          state[key] = extraData[key];
        }

        continue;

      case ('removeProperties'):
        const keysToRemove = action.keysToRemove;

        for (const key of keysToRemove) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }

        continue;

      case ('clear'):
        for (const key in state) {
          delete state[key];
        }

        continue;

      default:
        return state;
    }
  }
}

module.exports = transformState;
