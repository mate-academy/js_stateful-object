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
        for (const deleteKey of action.keysToRemove) {
          delete state[deleteKey];
        }

        break;

      case 'clear':
        for (const stateKey in state) {
          delete state[stateKey];
        }

        break;

      default:
        continue;
    }
  }
}

module.exports = transformState;
