'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    const { type, extraData, keysToRemove } = act;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const keys in state) {
          delete state[keys];
        }
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
