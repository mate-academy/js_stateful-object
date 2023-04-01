'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        const extraData = action.extraData;

        for (const [key, value] of Object.entries(extraData)) {
          state[key] = value;
        }
        break;

      case 'removeProperties':
        const keysToRemove = action.keysToRemove;

        for (const key of keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const key of Object.keys(state)) {
          delete state[key];
        }
    }
  }
}

module.exports = transformState;
