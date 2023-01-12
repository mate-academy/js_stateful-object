'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const {
      type,
      extraData,
      keysToRemove,
    } = action;

    switch (type) {
      case 'clear':
        for (const prop in state) {
          delete state[prop];
        };
        break;

      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        for (const prop of keysToRemove) {
          delete state[prop];
        };
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
