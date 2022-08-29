'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const { type } = actions[i];

    switch (type) {
      case 'addProperties':
        for (const [key, value] of Object.entries(actions[i].extraData)) {
          state[key] = value;
        }
        break;

      case 'removeProperties':
        for (const key of actions[i].keysToRemove) {
          if (state[key]) {
            delete state[key];
          }
        }
        break;

      default:
        if (state) {
          for (const key of Object.keys(state)) {
            delete state[key];
          }
        }
    }
  }
}

module.exports = transformState;
