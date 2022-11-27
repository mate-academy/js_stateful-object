'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const keys of action.keysToRemove) {
          delete state[keys];
        }
        break;

      case 'clear':
        for (const properties in state) {
          delete state[properties];
        }
        break;

      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
