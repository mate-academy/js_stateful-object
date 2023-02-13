'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case action.type === 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case action.type === 'removeProperties':
        for (const keyToRemove of action.keysToRemove) {
          delete state[keyToRemove];
        }
        break;

      default:
        for (const stateKey in state) {
          delete state[stateKey];
        }
    }
  }
}

module.exports = transformState;
