'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, keysToRemove, extraData } = action;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        for (const keyToRemove of keysToRemove) {
          delete state[keyToRemove];
        }
        break;

      case 'clear':
        for (const keyToRemoveInState in state) {
          delete state[keyToRemoveInState];
        }
        break;

      default:
        throw new Error(`Unknown type ${type}`);
    }
  }
}

module.exports = transformState;
