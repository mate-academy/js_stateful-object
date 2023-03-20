'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type } = action;

    switch (type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'removeProperties':
        const { keysToRemove } = action;

        for (const key of keysToRemove) {
          delete state[key];
        }
        break;

      case 'addProperties':
        const { extraData } = action;

        Object.assign(state, extraData);
        break;

      default:
        throw Error('Invalid data');
    }
  }
}

module.exports = transformState;
