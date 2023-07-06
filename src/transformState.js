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
        Object.assign(state, extraData);
        break;
      case 'removeProperties':
        for (const key of keysToRemove) {
          if (key in state) {
            delete state[key];
          }
        }
        break;
      case 'clear':
        const keys = Object.keys(state);

        for (const key of keys) {
          delete state[key];
        }
        break;
      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
