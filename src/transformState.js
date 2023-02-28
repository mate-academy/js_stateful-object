'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const { type, ...Keys } = actions[i];

    switch (type) {
      case 'addProperties':
        for (const key in Keys.extraData) {
          state[key] = Keys.extraData[key];
        }
        break;

      case 'removeProperties':
        for (const key of Keys.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        return 'ERROR';
    }
  };

  return state;
}

module.exports = transformState;
