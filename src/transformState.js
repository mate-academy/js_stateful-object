'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'addProperties':
        Object.assign(state, extraData);
        break;

      default:
        for (const key in keysToRemove) {
          delete state[keysToRemove[key]];
        }
    }
  }

  return state;
}

module.exports = transformState;
