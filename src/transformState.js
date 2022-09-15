'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const { type } = actions[i];
    const { extraData } = actions[i];
    const keysToRemove = actions[i].keysToRemove;
    const stateObjectKeys = Object.keys(state);

    switch (type) {
      case 'addProperties':
        for (const [key, value] of Object.entries(extraData)) {
          state[key] = value;
        }
        break;

      case 'removeProperties':
        for (const key of keysToRemove) {
          if (state[key]) {
            delete state[key];
          }
        }
        break;

      case 'clear':
        if (state) {
          for (const key of stateObjectKeys) {
            delete state[key];
          }
        }
        break;

      default:
        return 'Broken Input';
    }
  }
}

module.exports = transformState;
