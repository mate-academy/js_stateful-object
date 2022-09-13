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
        for (const keys of keysToRemove) {
          delete state[keys];
        }
        break;

      case 'clear':
        for (const properties in state) {
          delete state[properties];
        }
        break;

      default:
        throw new Error('Wrong type');
    }
  }

  return state;
}

module.exports = transformState;
