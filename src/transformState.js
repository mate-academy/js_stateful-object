'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const act of actions) {
    const { type, ...Keys } = act;

    switch (type) {
      case 'addProperties':
        Object.assign(state, Keys.extraData);
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
