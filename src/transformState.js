'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actionions
 */
function transformState(state, actionions) {
  for (const action of actionions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const stateKey in state) {
          delete state[stateKey];
        }
        break;

      default:
        throw new Error();
    }
  }
}

module.exports = transformState;
